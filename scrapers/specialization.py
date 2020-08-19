import requests

import re
import json

from urllib.request import urlopen
from bs4 import BeautifulSoup

urls = {
    "acct": "accounting",
    "btm": "business-technology-management",
    "eship": "entrepreneurship",
    "fin": "finance",
    "biz": "general-business-management",
    "global": "global-supply-chain-and-logistics-management",
    "mkting": "marketing",
    "ops": "operations-and-logistics",
    "obhr": "organizational-behaviour-and-human-resources",
    "re": "real-estate",
}

url = "https://mybcom.sauder.ubc.ca/courses-money-enrolment/options/" + \
    urls['fin']

{
    "name": "Accounting",
    "courses": {
        "Year 3": {
            "Required": ["COMM 353", "COMM 354"]
        },
        "Year 4": {
            "Required": ["COMM 450"],
            "Three credits from the following courses": ["COMM 452", "COMM 454", "COMM 459"],
            "Also three credits from the following courses": ["COMM 452", "COMM 453", "COMM 454", "COMM 455", "COMM 459"]
        },
        "Electives": ["COMM 355"]
    }
}

{
    "name": "Business Technology Management",
    "courses": {
        "Year 2": {
            "Required": ["COMM 205"]
        },
        "Year 3": {
            "Required": ["COMM 335"],
            "Three credits from the following courses": ["COMM 436", "COMM 437", "COMM 438"]
        },
        "Year 3 or 4": {
            "Required": ["COMM 439"],
            "Six credits from the following courses": ["COMM 436", "COMM 437", "COMM 438"]
        },
        "Electives": ["COMM 336", "COMM 337", "COMM 435", "COMM 456"]
    }
}

{
    "name": "Entrepreneurship",
    "courses": {
        "Year 3": {
            "Required": ["COMM 382", "COMM 387"]
        },
        "Year 4": {
            "Nine credits from the following courses": ["APSC 383", "COMM 466", "COMM 383", "COMM 386I", "COMM 386L", "COMM 388", "COMM 389", "COMM 470", "COMM 482", "COMM 485", "COMM 486G", "COMM 486W"]
        }
    }
}

{
    "name": "Finance",
    "courses": {
        "Year 3": {
            "Required": ["COMM 370", "COMM 371", "COMM 374"]
        },
        "Year 4": {
            "Six credits from the following courses": ["COMM 377", "COMM 470", "COMM 471", "COMM 474", "COMM 475", "COMM 477", "COMM 479", "COMM 486H"]
        }
    }
}

{
    "name": "General Business Management",
    "courses": {
        "Year 3": {
            "Required": ["COMM 393"]
        },
        "Year 4": {
            "Three credits from the following courses": ["COMM 497", "COMM 498"],
            "Six credits from the following courses": ["COMM 486M", "COMM 491", "COMM 492", "COMM 497", "COMM 498"]
        }
    }
}

{
    "name": "Global Supply Chain and Logistics Management",
    "courses": {
        "Year 3 Term 1 at Copenhagen Business School": {
            "Required": ["COMM 342", "COMM 343"]
        },
        "Year 3 Term 2 at UBC Sauder School of Business": {
            "Required": ["COMM 414", "COMM 415"]
        },
        "Year 4 Term 1 at Chinese University of Hong Kong (Shenzhen)": {
            "Required": ["COMM 344", "COMM 345"]
        }
    }
}

{
    "name": "Marketing",
    "courses": {
        "Year 3": {
            "Required": ["COMM 362", "COMM 363", "COMM 365"]
        },
        "Year 4": {
            "Required": ["COMM 468"],
            "Three credits from the following courses": ["COMM 386R", "COMM 386U", "COMM 389", "COMM 414", "COMM 460", "COMM 461", "COMM 462", "COMM 463", "COMM 464", "COMM 466", "COMM 467", "COMM 469", "COMM 482", "COMM 484", "COMM 486I"]
        }
    }
}

{
    "name": "Operations and Logistics",
    "courses": {
        "Year 3 Term 1": {
            "Human Resources Management track (HRM)": ["COHR 303", "COHR 304", "COHR 305", "COHR 308", "COHR 403", "COHR 405", "COHR 406", "COHR 433", "COMM 386H", "COMM 486C"],
            "Organizational Consulting track (OC)": ["COHR 301", "COHR 302", "COHR 307", "COHR 311", "COHR 401", "COHR 402", "COHR 404", "COHR 407", "COHR 408", "COHR 409", "COHR 410", "COHR 411", "COHR 486A", "COHR 486B", "COHR 486D", "COMM 383", "COMM 386H", "COMM 486C"]
        }
    }
}

{
    "name": "Real Estate",
    "courses": {
        "Year 3": {
            "Required": ["COMM 306", "COMM 307"]
        },
        "Year 4": {
            "Required": ["COMM 405", "COMM 407", "COMM 408"]
        },
        "Electives": ["GEOG 370", "PLAN 425", "ECON 345"]
    }
}
