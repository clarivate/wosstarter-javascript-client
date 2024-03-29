# ClarivateWosStarterJsClient.DocumentsApi

All URIs are relative to *http://api.clarivate.com/apis/wos-starter*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentsGet**](DocumentsApi.md#documentsGet) | **GET** /documents | Query Web of Science documents 
[**documentsUidGet**](DocumentsApi.md#documentsUidGet) | **GET** /documents/{uid} | Get Web of Science document by Accesssion Number (UID)



## documentsGet

> DocumentsList documentsGet(q, opts)

Query Web of Science documents 

The endpoint allows to search, filter, or browse across the Web of Science document content by using [advanced search query builder](https://webofscience.help.clarivate.com/en-us/Content/advanced-search.html). The following table lists the field tags that are supported by this API. | Field Tag | Description                                                                                                                                                 | |-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------| | TI        | Title of document                                                                                                                                           | | IS        | ISSN or ISBN                                                                                                                                                | | SO        | Source title - The result contains all source titles within product database (for example, journal titles and/or book titles if the product includes books) | | VL        | Volume                                                                                                                                                      | | PG        | Page                                                                                                                                                        | | CS        | Issue                                                                                                                                                       | | PY        | Year Published                                                                                                                                              | | AU        | Author                                                                                                                                                      | | AI        | Author Identifier                                                                                                                                                      | | UT        | Accession Number                                                                                                                                            | | DO        | DOI                                                                                                                                                         | | DT        | Document Type                                                                                                                                                          | | PMID      | PubMed ID                                                                                                                                                   | | OG        | Search for preferred organization names and/or their name variants from the Preferred Organization Index. &lt;p&gt; A search on a preferred organization name returns all records that contain the preferred name and all records that contain its name variants. A search on a name variant returns all records that contain the variant. For example, Cornell Law Sch returns all records that contain Cornell Law Sch in the Addresses field. &lt;p&gt; When searching for organization names that contain a Boolean (AND, NOT, NEAR, and SAME), always enclose the word in quotation marks ( \&quot; \&quot; ). For example: &lt;p&gt;   - OG&#x3D;(Japan Science \&quot;and\&quot; Technology Agency (JST))      &lt;br&gt;   - OG&#x3D;(\&quot;Near\&quot; East Univ)         &lt;br&gt; - OG&#x3D;(\&quot;OR\&quot; Hlth Sci Univ)                           | | TS        | Searches for topic terms in the following fields within a document: &lt;p&gt; - Title &lt;br&gt; - Abstract &lt;br&gt; - Author keywords &lt;br&gt; - Keywords Plus 

### Example

```javascript
import ClarivateWosStarterJsClient from 'clarivate-wos-starter-js-client';

let apiInstance = new ClarivateWosStarterJsClient.DocumentsApi();
let q = PY=2020; // String | Web of Science advanced [advanced search query builder](https://webofscience.help.clarivate.com/en-us/Content/advanced-search.html). The supported field tags are listed in description.
let opts = {
  'db': "'WOS'", // String | Web of Science Database abbreviation * WOS - Web of Science Core collection * BIOABS - Biological Abstracts * BCI - BIOSIS Citation Index * BIOSIS - BIOSIS Previews * CCC - Current Contents Connect * DIIDW - Derwent Innovations Index * DRCI - Data Citation Index * MEDLINE - MEDLINE The U.S. National Library of Medicine® (NLM®) premier life sciences database. * ZOOREC - Zoological Records * WOK - All databases 
  'limit': 10, // Number | set the limit of records on the page (1-50)
  'page': 1, // Number | set the result page
  'sortField': "sortField_example" // String | Order by field(s). Field name and order by clause separated by '+', use A for ASC and D for DESC, ex: PY+D. Multiple values are separated by comma. Supported fields:  * **LD** - Load Date * **PY** - Publication Year * **RS** - Relevance * **TS** - Times Cited 
};
apiInstance.documentsGet(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Web of Science advanced [advanced search query builder](https://webofscience.help.clarivate.com/en-us/Content/advanced-search.html). The supported field tags are listed in description. | 
 **db** | **String**| Web of Science Database abbreviation * WOS - Web of Science Core collection * BIOABS - Biological Abstracts * BCI - BIOSIS Citation Index * BIOSIS - BIOSIS Previews * CCC - Current Contents Connect * DIIDW - Derwent Innovations Index * DRCI - Data Citation Index * MEDLINE - MEDLINE The U.S. National Library of Medicine® (NLM®) premier life sciences database. * ZOOREC - Zoological Records * WOK - All databases  | [optional] [default to &#39;WOS&#39;]
 **limit** | **Number**| set the limit of records on the page (1-50) | [optional] [default to 10]
 **page** | **Number**| set the result page | [optional] [default to 1]
 **sortField** | **String**| Order by field(s). Field name and order by clause separated by &#39;+&#39;, use A for ASC and D for DESC, ex: PY+D. Multiple values are separated by comma. Supported fields:  * **LD** - Load Date * **PY** - Publication Year * **RS** - Relevance * **TS** - Times Cited  | [optional] 

### Return type

[**DocumentsList**](DocumentsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## documentsUidGet

> Document documentsUidGet(uid)

Get Web of Science document by Accesssion Number (UID)

Get Web of Science document by Accesssion Number (UID)

### Example

```javascript
import ClarivateWosStarterJsClient from 'clarivate-wos-starter-js-client';

let apiInstance = new ClarivateWosStarterJsClient.DocumentsApi();
let uid = WOS:000267144200002; // String | Web of Science unique identifier (Accession Number)
apiInstance.documentsUidGet(uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**| Web of Science unique identifier (Accession Number) | 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

