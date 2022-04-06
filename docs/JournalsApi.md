# ClarivateWosStarterJsClient.JournalsApi

All URIs are relative to *http://api.clarivate.com/apis/wos-starter*

Method | HTTP request | Description
------------- | ------------- | -------------
[**journalsGet**](JournalsApi.md#journalsGet) | **GET** /journals | Query Journals by ISSN
[**journalsIdGet**](JournalsApi.md#journalsIdGet) | **GET** /journals/{id} | Get Journal by ID



## journalsGet

> JournalsList journalsGet(opts)

Query Journals by ISSN

### Example

```javascript
import ClarivateWosStarterJsClient from 'clarivate-wos-starter-js-client';

let apiInstance = new ClarivateWosStarterJsClient.JournalsApi();
let opts = {
  'issn': "issn_example" // String | Query Journal by ISSN
};
apiInstance.journalsGet(opts, (error, data, response) => {
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
 **issn** | **String**| Query Journal by ISSN | [optional] 

### Return type

[**JournalsList**](JournalsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## journalsIdGet

> Journal journalsIdGet(id)

Get Journal by ID

### Example

```javascript
import ClarivateWosStarterJsClient from 'clarivate-wos-starter-js-client';

let apiInstance = new ClarivateWosStarterJsClient.JournalsApi();
let id = ANAT_REC_PART_A; // String | 
apiInstance.journalsIdGet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**Journal**](Journal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

