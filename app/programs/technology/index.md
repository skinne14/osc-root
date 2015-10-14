---
layout: right-inner-sidebar
sidebar: technology
breadcrumbs: true
title: Technology
---

## DASH
{:.leading-header}

[DASH](http://dash.harvard.edu/), Harvard's institutional repository, is a customized instance of [DSpace](http://www.dspace.org/) 1.8. DSpace is the most widely-used application for institutional repositories.

Workflow customizations include authority control for Harvard authors, auto-matching of authors, auto-fill of metadata using [DOIs](http://www.doi.org/), duplicate detection, integration of assistance authorization and waiver databases, and [ORCID](http://orcid.org/) integration.

Interaction with other systems includes auto-ingest from PubMed Central's [open-access subset](http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/), deposit via [SWORD](http://swordapp.org/), and exposure of metadata via [OAI-PMH](http://www.openarchives.org/pmh/).

### DASH Stats and the DASHboard
{:.h4}

DASH download statistics are available at [DASH Stats](https://osc.hul.harvard.edu/dash/mydash). These numbers, updated nightly, are available in the aggregate, by school, collection, or department. Harvard authors may log in to see their own download counts; in addition, per-article download counts are available on each article's landing page. This system is composed of Python and shell scripts on the back end, and PHP and JavaScript on the front end, notably [Highcharts](http://www.highcharts.com/) and [DataTables](http://www.datatables.net/).

Similar to DASH Stats is the DASHboard, a set of displays for internal metrics and workflow tools.

<a href="#top">Back to top</a> 

## ETDs @ Harvard

[ETDs @ Harvard](http://etds.lib.harvard.edu/about.html) is built on [Vireo](https://www.tdl.org/etds/), open-source software developed by the [Texas Digital Library](https://www.tdl.org/). We are running twelve instances of the system, each customized for a particular school or program. Like DSpace, Vireo is written in Java. Theses and dissertations are loaded into DASH, the [library catalog](http://hollis.harvard.edu/), the [DRS](http://hul.harvard.edu/ois/systems/drs/), Harvard's preservation repository, ProQuest Dissertations and Theses, and sent to be printed by a series of Python scripts.

<a href="#top">Back to top</a>

## Websites

OSC runs a number of websites and pages, including this one, as well as the sites for [Copyright at Harvard Library](http://copyright.lib.harvard.edu/), [COPE](http://www.oacompact.org/), the [journal-flipping project]({{site.baseur}}/programs/journal-flipping/), the [orphan-works project]({{site.baseur}}/programs/orphan-works/), and [Library Lab](https://osc.hul.harvard.edu/liblab/). Past sites include those for Open Metadata (now [available at the library website](http://openmetadata.lib.harvard.edu/)), Yana, Highbrow, and the Library Transition.

Historically, we have used [Drupal](https://www.drupal.org/) to build websites, but are moving toward static sites generated with [Jekyll](http://jekyllrb.com/) and dynamic content generated with [Flask](http://flask.pocoo.org/). 

We are committed to delivering accessible, responsive, and secure sites.

<a href="#top">Back to top</a>
