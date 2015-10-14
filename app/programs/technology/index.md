---
layout: right-inner-sidebar
sidebar: technology
breadcrumbs: true
title: Technology
---

## The repository is just where it starts

### DASH

[DASH](http://dash.harvard.edu/), Harvard's institutional repository, is a customized instance of [DSpace](http://www.dspace.org/) 1.8.

Workflow customizations include authority control for Harvard authors, auto-matching of authors, auto-fill of metadata using DOI, duplicate detection, integration of assistance authorization and waiver databases, and ORCID integration.

Interaction with other systems includes auto-ingest from PubMed Central's [open-access subset](http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/), deposit via [SWORD](http://swordapp.org/), and exposure of metadata via [OAI-PMH](http://www.openarchives.org/pmh/).

#### DASH Stats and the DASHboard

DASH download statistics are available at [DASH Stats]({{site.baseurl}}/dash/mydash). These numbers, updated nightly, are available in the aggregate, by school, collection, or department. Harvard authors may log in to see their own download counts; in addition, per-article download counts are available on each article's landing page. This system is composed of Python and shell scripts on the back end, and PHP and JavaScript on the front end, notably [Highcharts](http://www.highcharts.com/) and [DataTables](http://www.datatables.net/).

Similar to DASH Stats is the DASHboard, a set of displays for internal metrics and workflow tools. 

### ETDs @ Harvard

[ETDs @ Harvard](http://etds.lib.harvard.edu/about.html) is built on [Vireo](https://www.tdl.org/etds/), open-source software developed by the [Texas Digital Library](https://www.tdl.org/). We are running twelve instances of the system, each customized for a particular school or program. Like DSpace, Vireo is written in Java. Theses and dissertations are loaded into DASH, the [library catalog](http://hollis.harvard.edu/), the [DRS](http://hul.harvard.edu/ois/systems/drs/), Harvard's preservation repository, ProQuest Dissertations and Theses, and sent to be printed by a series of Python scripts.

### Websites

OSC runs a number of websites, including this one, as well as the sites for Copyright at Harvard Library, COPE, the journal-flipping project, the orphan-works project, and Library Lab. Past sites include those for Open Metadata (now available at the library website), Yana, Highbrow, and the Library Transition.

Historically, we have used [Drupal](https://www.drupal.org/), but are moving toward static websites generated with [Jekyll](http://jekyllrb.com/) and dynamic content generated with [Flask](http://flask.pocoo.org/). Our ideal is accessible, responsive, slim, semantically meaningful, and secure sites.
