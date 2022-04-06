/**
 * Web of Science™ Starter API
 * The Web of Science™ Starter API provides basic metadata and search functionality for Web of Science™ Documents and Journals. Based on your subscription, this API can return times cited of documents.  ## Resouces This API follows the REST approach to disclose resources in URL format. Only the GET method is currently available to perform requests over HTTP.  The API is available on the [Clarivate Developer Portal](https://developer.clarivate.com/apis/wos-starter). You can find more details about the subscription and the Plans.  ## Content  You can learn more about content at [Web of Science™ Product Page](https://clarivate.com/webofsciencegroup/solutions/web-of-science/) or in the [Web of Science™ Help](https://webofscience.help.clarivate.com/en-us/Content/home.htm). The following attributes are available from in the API. * UID (Unique Identifier) * Title * Issue * Pages * DOI * Volume * Times Cited * ISSN/eISSN * ISBN * PubMed ID * Source * Web of Science URL * Citing Articles Web of Science URL * Publication Date * Authors * Author Keywords * [Document Type](https://webofscience.help.clarivate.com/en-us/Content/document-types.html) * Cited References Web of Science URL * ResearcherID * Book DOI * Related Records Web of Science URL * Journal Citations Reports URL    ## Credentials  All requests require authentication with an API Key authentication flow. For more details, check the [Guide][https://developer.clarivate.com/help/api-access#key_access].  ## Search and field tags for Web of Science documents Web of Science™ offers [advanced search query builder](https://webofscience.help.clarivate.com/en-us/Content/advanced-search.html). This API does not support all field tags for documents. [Web of Science API Expanded](https://developer.clarivate.com/apis/wos) offers all available field tags. The following table lists the field tags that are supported by this API. | Field Tag | Description                                                                                                                                                 | |-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------| | TI        | Title of document                                                                                                                                           | | IS        | ISSN or ISBN                                                                                                                                                | | SO        | Source title - The result contains all source titles within product database (for example, journal titles and/or book titles if the product includes books) | | VL        | Volume                                                                                                                                                      | | PG        | Page                                                                                                                                                        | | CS        | Issue                                                                                                                                                       | | PY        | Year Published                                                                                                                                              | | AU        | Author                                                                                                                                                      | | AI        | Author Identifier                                                                                                                                                      | | UT        | Accession Number                                                                                                                                            | | DO        | DOI                                                                                                                                                         | | DT        | [Document Type](https://webofscience.help.clarivate.com/en-us/Content/document-types.html)                                                                                                                                                         | | PMID      | PubMed ID                                                                                                                                                   | | OG        | Search for preferred organization names and/or their name variants from the Preferred Organization Index. <p> A search on a preferred organization name returns all records that contain the preferred name and all records that contain its name variants. A search on a name variant returns all records that contain the variant. For example, Cornell Law Sch returns all records that contain Cornell Law Sch in the Addresses field. <p> When searching for organization names that contain a Boolean (AND, NOT, NEAR, and SAME), always enclose the word in quotation marks ( \" \" ). For example: <p>   - OG=(Japan Science \"and\" Technology Agency (JST))      <br>   - OG=(\"Near\" East Univ)         <br> - OG=(\"OR\" Hlth Sci Univ)                           | | TS        | Searches for topic terms in the following fields within a document: <p> - Title <br> - Abstract <br> - Author keywords <br> - Keywords Plus  ## Pagination To ensure fast response time, each search or multiple entity calls (such as `/documents`) retrieve only a certain number of hits/records.  There are two optional request parameters to browse along with the result&#58; _limit_ and _page_.  - limit&#58; Number of returned results, ranging from 0 to 50 (default **10**) - page&#58; Specifying a page to retrieve (default **1**)  Moreover, this information is shown in the response body, in the tag **metadata**&#58;  ```json \"metadata\": {   \"total\": 91,   \"page\": 1,   \"limit\": 10 } ```  ## Errors The WoS Journals API uses conventional HTTP success or failure status codes. For errors, some extra information is included to indicate what went wrong in the JSON response. The list of HTTP codes is listed below.  | Code  | Title  | Description | |---|---|---| | 400  | Bad request  | Request syntax error | | 401  | Unauthorized  | The API key is invalid or missed | | 404  | Not found  | The resource is not found | | 405 | Method not allowed | Method other than GET is not allowed | | 50X  | Server errors  | Technical error with servers| Each error response (except `401 Unauthorized` error) contains the code of the error, the title of the error and detailed description of the error: a misprint in an endpoint, wrong URL parameter, etc. The example of the error message is shown below:  ```json   \"error\": {     \"status\": 404,     \"title\": \"Resource couldn't be found\",     \"details\": \"There is no record found in the Web of Science database. Please check your query.\"   } ``` For the `401 Unauthorized` error the response body is a little bit different: ```json {   \"error_description\": \"The access token is missing\",   \"error\": \"invalid_request\" } 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AuthorName from './AuthorName';
import OtherName from './OtherName';

/**
 * The DocumentNames model module.
 * @module model/DocumentNames
 * @version 1.0.0
 */
class DocumentNames {
    /**
     * Constructs a new <code>DocumentNames</code>.
     * @alias module:model/DocumentNames
     */
    constructor() { 
        
        DocumentNames.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentNames</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentNames} obj Optional instance to populate.
     * @return {module:model/DocumentNames} The populated <code>DocumentNames</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentNames();

            if (data.hasOwnProperty('authors')) {
                obj['authors'] = ApiClient.convertToType(data['authors'], [AuthorName]);
            }
            if (data.hasOwnProperty('inventors')) {
                obj['inventors'] = ApiClient.convertToType(data['inventors'], [OtherName]);
            }
            if (data.hasOwnProperty('bookCorp')) {
                obj['bookCorp'] = ApiClient.convertToType(data['bookCorp'], [OtherName]);
            }
            if (data.hasOwnProperty('bookEditors')) {
                obj['bookEditors'] = ApiClient.convertToType(data['bookEditors'], [OtherName]);
            }
            if (data.hasOwnProperty('books')) {
                obj['books'] = ApiClient.convertToType(data['books'], [OtherName]);
            }
            if (data.hasOwnProperty('additionalAuthors')) {
                obj['additionalAuthors'] = ApiClient.convertToType(data['additionalAuthors'], [OtherName]);
            }
            if (data.hasOwnProperty('anonymous')) {
                obj['anonymous'] = ApiClient.convertToType(data['anonymous'], [OtherName]);
            }
            if (data.hasOwnProperty('assignees')) {
                obj['assignees'] = ApiClient.convertToType(data['assignees'], [OtherName]);
            }
            if (data.hasOwnProperty('corp')) {
                obj['corp'] = ApiClient.convertToType(data['corp'], [OtherName]);
            }
            if (data.hasOwnProperty('editors')) {
                obj['editors'] = ApiClient.convertToType(data['editors'], [OtherName]);
            }
            if (data.hasOwnProperty('investigators')) {
                obj['investigators'] = ApiClient.convertToType(data['investigators'], [OtherName]);
            }
            if (data.hasOwnProperty('sponsors')) {
                obj['sponsors'] = ApiClient.convertToType(data['sponsors'], [OtherName]);
            }
            if (data.hasOwnProperty('issuingOrganizations')) {
                obj['issuingOrganizations'] = ApiClient.convertToType(data['issuingOrganizations'], [OtherName]);
            }
        }
        return obj;
    }


}

/**
 * Authors of document
 * @member {Array.<module:model/AuthorName>} authors
 */
DocumentNames.prototype['authors'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} inventors
 */
DocumentNames.prototype['inventors'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} bookCorp
 */
DocumentNames.prototype['bookCorp'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} bookEditors
 */
DocumentNames.prototype['bookEditors'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} books
 */
DocumentNames.prototype['books'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} additionalAuthors
 */
DocumentNames.prototype['additionalAuthors'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} anonymous
 */
DocumentNames.prototype['anonymous'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} assignees
 */
DocumentNames.prototype['assignees'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} corp
 */
DocumentNames.prototype['corp'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} editors
 */
DocumentNames.prototype['editors'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} investigators
 */
DocumentNames.prototype['investigators'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} sponsors
 */
DocumentNames.prototype['sponsors'] = undefined;

/**
 * @member {Array.<module:model/OtherName>} issuingOrganizations
 */
DocumentNames.prototype['issuingOrganizations'] = undefined;






export default DocumentNames;

