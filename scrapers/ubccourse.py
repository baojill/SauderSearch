import requests
from requests import get

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


def parsePrereqs(var):
    temp = var.replace("All of", "")
    temp = temp.replace("all of", "")
    temp = var.replace(";", "")
    temp = temp.split("and")

    ret = []

    for e in temp:
        e = e.strip()
        old = e[0]
        upper = e[0].upper()
        e = e.replace(old, upper, 1)
        ret.append(e)

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

    datum['courseID'] = courseID
    datum['name'] = name
    datum['credits'] = credits
    datum['prereqs'] = []

    data.append(datum)

for i, cont in enumerate(content):
    description = cont.text.partition('  ')[0].partition(
        'This course is not eligible for Credit/D/Fail grading.')[0]
    prereqs = []
    corereqs = []

    allEm = cont.findAll("em")

    for em in allEm:
        if em.text == 'Prerequisite:':
            prereqs = parsePrereqs(em.next_sibling.strip().partition(".")[0])
            # print (prereqs)
        if em.text == 'Corequisite:':
            corereqs = parsePrereqs(em.next_sibling.strip().partition(".")[0])

    data[i]['description'] = description
    data[i]['prereqs'] = prereqs
    data[i]['corereqs'] = corereqs
