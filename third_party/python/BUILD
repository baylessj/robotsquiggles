package(default_visibility = ["PUBLIC"])

pip_library(
    name = "alabaster",
    version = "0.7.12",
)

pip_library(
    name = "babel",
    version = "2.8.0",
    deps = [
        ":pytz",
    ],
)

pip_library(
    name = "beautifulsoup4",
    version = "4.9.3",
    deps = [
        ":soupsieve",
    ],
)

pip_library(
    name = "breathe",
    version = "4.23.0",
    deps = [
        ":docutils",
        ":six",
        ":sphinx",
    ],
)

pip_library(
    name = "bs4",
    version = "0.0.1",
    deps = [
        ":beautifulsoup4",
    ],
)

pip_library(
    name = "certifi",
    version = "2020.6.20",
)

pip_library(
    name = "chardet",
    version = "3.0.4",
)

pip_library(
    name = "colorama",
    version = "0.4.4",
)

pip_library(
    name = "cycler",
    version = "0.10.0",
    deps = [
        ":six",
    ],
)

pip_library(
    name = "docutils",
    version = "0.16",
)

pip_library(
    name = "exhale",
    version = "0.2.3",
    deps = [
        ":breathe",
        ":bs4",
        ":lxml",
        ":six",
        ":sphinx",
    ],
)

pip_library(
    name = "idna",
    version = "2.10",
)

pip_library(
    name = "imagesize",
    version = "1.2.0",
)

pip_library(
    name = "jinja2",
    version = "2.11.2",
    deps = [
        ":markupsafe",
    ],
)

pip_library(
    name = "kiwisolver",
    version = "1.2.0",
)

pip_library(
    name = "lxml",
    version = "4.6.1",
)

pip_library(
    name = "markupsafe",
    version = "1.1.1",
)

pip_library(
    name = "matplotlib",
    version = "3.3.2",
    deps = [
        ":certifi",
        ":cycler",
        ":kiwisolver",
        ":numpy",
        ":pillow",
        ":pyparsing",
        ":python-dateutil",
    ],
)

pip_library(
    name = "numpy",
    version = "1.19.2",
    zip_safe = False,  # This is because NumPy has shared object files which can't be linked to them when zipped up
)

pip_library(
    name = "packaging",
    version = "20.4",
    deps = [
        ":pyparsing",
        ":six",
    ],
)

pip_library(
    name = "pillow",
    version = "8.0.0",
)

pip_library(
    name = "pygments",
    version = "2.7.2",
)

pip_library(
    name = "pyparsing",
    version = "2.4.7",
)

pip_library(
    name = "python-dateutil",
    version = "2.8.1",
    deps = [
        ":six",
    ],
)

pip_library(
    name = "pytz",
    version = "2020.1",
)

pip_library(
    name = "requests",
    version = "2.24.0",
    deps = [
        ":certifi",
        ":chardet",
        ":idna",
        ":urllib3",
    ],
)

pip_library(
    name = "six",
    version = "1.15.0",
)

pip_library(
    name = "snowballstemmer",
    version = "2.0.0",
)

pip_library(
    name = "soupsieve",
    version = "2.0.1",
)

pip_library(
    name = "sphinx",
    version = "3.2.1",
    deps = [
        ":alabaster",
        ":babel",
        ":colorama",
        ":docutils",
        ":imagesize",
        ":jinja2",
        ":packaging",
        ":pygments",
        ":requests",
        ":snowballstemmer",
        ":sphinxcontrib-applehelp",
        ":sphinxcontrib-devhelp",
        ":sphinxcontrib-htmlhelp",
        ":sphinxcontrib-jsmath",
        ":sphinxcontrib-qthelp",
        ":sphinxcontrib-serializinghtml",
    ],
)

pip_library(
    name = "sphinx-rtd-theme",
    version = "0.5.0",
    deps = [
        ":sphinx",
    ],
)

pip_library(
    name = "sphinxcontrib-applehelp",
    version = "1.0.2",
)

pip_library(
    name = "sphinxcontrib-devhelp",
    version = "1.0.2",
)

pip_library(
    name = "sphinxcontrib-htmlhelp",
    version = "1.0.3",
)

pip_library(
    name = "sphinxcontrib-jsmath",
    version = "1.0.1",
)

pip_library(
    name = "sphinxcontrib-qthelp",
    version = "1.0.3",
)

pip_library(
    name = "sphinxcontrib-serializinghtml",
    version = "1.1.4",
)

pip_library(
    name = "urllib3",
    version = "1.25.11",
)
