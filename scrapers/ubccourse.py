import requests

import re
import json

from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

url = "http://www.calendar.ubc.ca/vancouver/courses.cfm?page=name&code=COMM"

# opening up connection, grabbing the page
uClient = uReq(url)
page_html = uClient.read()
uClient.close()

# html parsing
page_soup = soup(page_html, "html.parser")

# grabs each course + content
courses = page_soup.findAll("dt")
content = page_soup.findAll("dd")


class Course():

    # Initialize all variables
    def __init__(self, courseID):
        self.courseID = courseID
        self.name = ''
        self.credits = 0
        self.prereqs = self.Req()
        self.corereqs = self.Req()
        self.description = ''

    def convert_preq(self):
        return {
            "description": self.prereqs.description,
            "courses": self.prereqs.courses}

    def convert_creq(self):
        return {
            "description": self.corereqs.description,
            "courses": self.corereqs.courses}

    class Req():
        def __init__(self):
            self.description = ''
            self.courses = []


def parseReqs(var):
    pat0 = 'BUSI....'
    pat1 = 'COEC....'
    pat2 = 'COMM....'
    pat3 = 'COMR....'
    pat4 = 'ECON....'
    pat5 = 'ENGL....'
    pat6 = 'MATH....'

    busi = re.findall(pat0, var)
    coec = re.findall(pat1, var)
    comm = re.findall(pat2, var)
    comr = re.findall(pat3, var)
    econ = re.findall(pat4, var)
    engl = re.findall(pat5, var)
    math = re.findall(pat6, var)

    ret = busi + coec + comm + comr + econ + engl + math

    if ret:
        return ret
    else:
        ret = []
        return ret


def toInt(var):
    float_str = float(var)
    int_str = int(float_str)
    return int_str


data = []

for course in courses:
    datum = {}
    courseID = course.a.next_sibling.strip().partition("(")[0].strip()
    name = course.b.text
    credits = toInt(course.a.next_sibling.strip().partition(
        "(")[2].partition(")")[0].partition("-")[0].partition("/")[0])

    c = Course(courseID)
    c.name = name
    c.credits = credits
    c.prereqs.description = ''
    c.prereqs.courses = []
    c.corereqs.description = ''
    c.corereqs.courses = []

    data.append(c)

for i, cont in enumerate(content):
    description = cont.text.partition('  ')[0].partition(
        'This course is not eligible for Credit/D/Fail grading.')[0]

    if description:
        description = description
    else:
        description = ''

    pDescription = ''
    cDescription = ''
    prereqs = []
    corereqs = []

    allEm = cont.findAll("em")

    for em in allEm:
        if em.text == 'Prerequisite:':
            pDescription = em.next_sibling.strip()
            prereqs = parseReqs(em.next_sibling.strip().partition(".")[0])

        if em.text == 'Corequisite:':
            cDescription = em.next_sibling.strip()
            corereqs = parseReqs(em.next_sibling.strip().partition(".")[0])

    data[i].description = description
    data[i].prereqs.description = pDescription
    data[i].prereqs.courses = prereqs
    data[i].corereqs.courses = corereqs


def validateJSON(jsonData):
    try:
        json.loads(jsonData)
    except ValueError as err:
        return False
    return True


# dat = data[1]
# dat.prereqs = dat.convert_preq()
# dat.corereqs = dat.convert_creq()

dd = []

for i, d in enumerate(data):
    dat = data[i]
    dat.prereqs = dat.convert_preq()
    dat.corereqs = dat.convert_creq()
    json_dump = json.dumps(dat.__dict__)
    print(json_dump)
    print(type(json_dump))
    dd.append(json_dump)


print('\n')
len = len(data)
print(len)

with open("/Users/jillbao/Documents/Projects/sauder-search/data/comm-courses.txt", "w") as f:
    f.write(json.dumps(dd))


# url = 'http://localhost:5000/courses/add'

# try:
#     if (validateJSON(json_dump)):
#         r = requests.post(url, json=json_dump)
#         print(r.text)
#         print(r.status_code)
# except requests.exceptions.ConnectionError:
#     r.status_code = "Connection refused"
