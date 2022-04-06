# clarivate-wos-starter-js-client

ClarivateWosStarterJsClient - JavaScript client for clarivate-wos-starter-js-client
The Web of Science™ Starter API provides basic metadata and search functionality for Web of Science™ Documents and Journals. Based on your subscription, this API can return times cited of documents.

## Resouces
This API follows the REST approach to disclose resources in URL format. Only the GET method is currently available to perform requests over HTTP.

The API is available on the [Clarivate Developer Portal](https://developer.clarivate.com/apis/wos-starter). You can find more details about the subscription and the Plans.

## Content

You can learn more about content at [Web of Science™ Product Page](https://clarivate.com/webofsciencegroup/solutions/web-of-science/) or in the [Web of Science™ Help](https://webofscience.help.clarivate.com/en-us/Content/home.htm).
The following attributes are available from in the API.
* UID (Unique Identifier)
* Title
* Issue
* Pages
* DOI
* Volume
* Times Cited
* ISSN/eISSN
* ISBN
* PubMed ID
* Source
* Web of Science URL
* Citing Articles Web of Science URL
* Publication Date
* Authors
* Author Keywords
* [Document Type](https://webofscience.help.clarivate.com/en-us/Content/document-types.html)
* Cited References Web of Science URL
* ResearcherID
* Book DOI
* Related Records Web of Science URL
* Journal Citations Reports URL



## Credentials

All requests require authentication with an API Key authentication flow. For more details, check the [Guide][https://developer.clarivate.com/help/api-access#key_access].

## Search and field tags for Web of Science documents
Web of Science™ offers [advanced search query builder](https://webofscience.help.clarivate.com/en-us/Content/advanced-search.html). This API does not support all field tags for documents. [Web of Science API Expanded](https://developer.clarivate.com/apis/wos) offers all available field tags. The following table lists the field tags that are supported by this API.
| Field Tag | Description                                                                                                                                                 |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TI        | Title of document                                                                                                                                           |
| IS        | ISSN or ISBN                                                                                                                                                |
| SO        | Source title - The result contains all source titles within product database (for example, journal titles and/or book titles if the product includes books) |
| VL        | Volume                                                                                                                                                      |
| PG        | Page                                                                                                                                                        |
| CS        | Issue                                                                                                                                                       |
| PY        | Year Published                                                                                                                                              |
| AU        | Author                                                                                                                                                      |
| AI        | Author Identifier                                                                                                                                                      |
| UT        | Accession Number                                                                                                                                            |
| DO        | DOI                                                                                                                                                         |
| DT        | [Document Type](https://webofscience.help.clarivate.com/en-us/Content/document-types.html)                                                                                                                                                         |
| PMID      | PubMed ID                                                                                                                                                   |
| OG        | Search for preferred organization names and/or their name variants from the Preferred Organization Index. <p> A search on a preferred organization name returns all records that contain the preferred name and all records that contain its name variants. A search on a name variant returns all records that contain the variant. For example, Cornell Law Sch returns all records that contain Cornell Law Sch in the Addresses field. <p> When searching for organization names that contain a Boolean (AND, NOT, NEAR, and SAME), always enclose the word in quotation marks ( \" \" ). For example: <p>   - OG=(Japan Science \"and\" Technology Agency (JST))      <br>   - OG=(\"Near\" East Univ)         <br> - OG=(\"OR\" Hlth Sci Univ)                           |
| TS        | Searches for topic terms in the following fields within a document: <p> - Title <br> - Abstract <br> - Author keywords <br> - Keywords Plus

## Pagination
To ensure fast response time, each search or multiple entity calls (such as `/documents`) retrieve only a certain number of hits/records.

There are two optional request parameters to browse along with the result&#58; _limit_ and _page_.

- limit&#58; Number of returned results, ranging from 0 to 50 (default **10**)
- page&#58; Specifying a page to retrieve (default **1**)

Moreover, this information is shown in the response body, in the tag **metadata**&#58;

```json
\"metadata\": {
  \"total\": 91,
  \"page\": 1,
  \"limit\": 10
}
```

## Errors
The WoS Journals API uses conventional HTTP success or failure status codes. For errors, some extra information is included to indicate what went wrong in the JSON response. The list of HTTP codes is listed below.

| Code  | Title  | Description |
|---|---|---|
| 400  | Bad request  | Request syntax error |
| 401  | Unauthorized  | The API key is invalid or missed |
| 404  | Not found  | The resource is not found |
| 405 | Method not allowed | Method other than GET is not allowed |
| 50X  | Server errors  | Technical error with servers|
Each error response (except `401 Unauthorized` error) contains the code of the error, the title of the error and detailed description of the error: a misprint in an endpoint, wrong URL parameter, etc. The example of the error message is shown below:

```json
  \"error\": {
    \"status\": 404,
    \"title\": \"Resource couldn't be found\",
    \"details\": \"There is no record found in the Web of Science database. Please check your query.\"
  }
```
For the `401 Unauthorized` error the response body is a little bit different:
```json
{
  \"error_description\": \"The access token is missing\",
  \"error\": \"invalid_request\"
}

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install clarivate-wos-starter-js-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your clarivate-wos-starter-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ClarivateWosStarterJsClient = require('clarivate-wos-starter-js-client');


var api = new ClarivateWosStarterJsClient.DocumentsApi()
var q = PY=2020; // {String} Web of Science advanced [advanced search query builder](https://webofscience.help.clarivate.com/en-us/Content/advanced-search.html). The supported field tags are listed in description.
var opts = {
  'db': "'WOS'", // {String} Web of Science Database abbreviation * WOS - Web of Science Core collection * BIOABS - Biological Abstracts * BCI - BIOSIS Citation Index * BIOSIS - BIOSIS Previews * CCC - Current Contents Connect * DIIDW - Derwent Innovations Index * DRCI - Data Citation Index * MEDLINE - MEDLINE The U.S. National Library of Medicine® (NLM®) premier life sciences database. * ZOOREC - Zoological Records * WOK - All databases 
  'limit': 10, // {Number} set the limit of records on the page (1-50)
  'page': 1, // {Number} set the result page
  'sortField': "sortField_example" // {String} Order by field(s). Field name and order by clause separated by '+', use A for ASC and D for DESC, ex: PY+D. Multiple values are separated by comma. Supported fields:  * **LD** - Load Date * **PY** - Publication Year * **RS** - Relevance * **TS** - Times Cited 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.documentsGet(q, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api.clarivate.com/apis/wos-starter*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ClarivateWosStarterJsClient.DocumentsApi* | [**documentsGet**](docs/DocumentsApi.md#documentsGet) | **GET** /documents | Query Web of Science documents 
*ClarivateWosStarterJsClient.DocumentsApi* | [**documentsUidGet**](docs/DocumentsApi.md#documentsUidGet) | **GET** /documents/{uid} | Get Web of Science document by Accesssion Number (UID)
*ClarivateWosStarterJsClient.JournalsApi* | [**journalsGet**](docs/JournalsApi.md#journalsGet) | **GET** /journals | Query Journals by ISSN
*ClarivateWosStarterJsClient.JournalsApi* | [**journalsIdGet**](docs/JournalsApi.md#journalsIdGet) | **GET** /journals/{id} | Get Journal by ID


## Documentation for Models

 - [ClarivateWosStarterJsClient.AuthorName](docs/AuthorName.md)
 - [ClarivateWosStarterJsClient.Document](docs/Document.md)
 - [ClarivateWosStarterJsClient.DocumentCitations](docs/DocumentCitations.md)
 - [ClarivateWosStarterJsClient.DocumentIdentifiers](docs/DocumentIdentifiers.md)
 - [ClarivateWosStarterJsClient.DocumentKeywords](docs/DocumentKeywords.md)
 - [ClarivateWosStarterJsClient.DocumentLinks](docs/DocumentLinks.md)
 - [ClarivateWosStarterJsClient.DocumentNames](docs/DocumentNames.md)
 - [ClarivateWosStarterJsClient.DocumentSource](docs/DocumentSource.md)
 - [ClarivateWosStarterJsClient.DocumentSourcePages](docs/DocumentSourcePages.md)
 - [ClarivateWosStarterJsClient.DocumentsList](docs/DocumentsList.md)
 - [ClarivateWosStarterJsClient.Journal](docs/Journal.md)
 - [ClarivateWosStarterJsClient.JournalLinks](docs/JournalLinks.md)
 - [ClarivateWosStarterJsClient.JournalsList](docs/JournalsList.md)
 - [ClarivateWosStarterJsClient.Metadata](docs/Metadata.md)
 - [ClarivateWosStarterJsClient.OtherName](docs/OtherName.md)


## Documentation for Authorization

All endpoints do not require authorization.
