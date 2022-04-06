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


import ApiClient from './ApiClient';
import AuthorName from './model/AuthorName';
import Document from './model/Document';
import DocumentCitations from './model/DocumentCitations';
import DocumentIdentifiers from './model/DocumentIdentifiers';
import DocumentKeywords from './model/DocumentKeywords';
import DocumentLinks from './model/DocumentLinks';
import DocumentNames from './model/DocumentNames';
import DocumentSource from './model/DocumentSource';
import DocumentSourcePages from './model/DocumentSourcePages';
import DocumentsList from './model/DocumentsList';
import Journal from './model/Journal';
import JournalLinks from './model/JournalLinks';
import JournalsList from './model/JournalsList';
import Metadata from './model/Metadata';
import OtherName from './model/OtherName';
import DocumentsApi from './api/DocumentsApi';
import JournalsApi from './api/JournalsApi';


/**
* The_Web_of_Science_Starter_API_provides_basic_metadata_and_search_functionality_for_Web_of_Science_Documents_and_Journals__Based_on_your_subscription_this_API_can_return_times_cited_of_documents__ResoucesThis_API_follows_the_REST_approach_to_disclose_resources_in_URL_format__Only_the_GET_method_is_currently_available_to_perform_requests_over_HTTP_The_API_is_available_on_the__Clarivate_Developer_Portal_https__developer_clarivate_com_apis_wos_starter__You_can_find_more_details_about_the_subscription_and_the_Plans__ContentYou_can_learn_more_about_content_at__Web_of_Science_Product_Page_https__clarivate_com_webofsciencegroup_solutions_web_of_science__or_in_the__Web_of_Science_Help_https__webofscience_help_clarivate_com_en_us_Content_home_htm_The_following_attributes_are_available_from_in_the_API__UID__Unique_Identifier_Title_Issue_Pages_DOI_Volume_Times_Cited_ISSN_eISSN_ISBN_PubMed_ID_Source_Web_of_Science_URL_Citing_Articles_Web_of_Science_URL_Publication_Date_Authors_Author_Keywords__Document_Type_https__webofscience_help_clarivate_com_en_us_Content_document_types_html_Cited_References_Web_of_Science_URL_ResearcherID_Book_DOI_Related_Records_Web_of_Science_URL_Journal_Citations_Reports_URL_CredentialsAll_requests_require_authentication_with_an_API_Key_authentication_flow__For_more_details_check_the__Guide_https__developer_clarivate_com_help_api_accesskey_access__Search_and_field_tags_for_Web_of_Science_documentsWeb_of_Science_offers__advanced_search_query_builder_https__webofscience_help_clarivate_com_en_us_Content_advanced_search_html__This_API_does_not_support_all_field_tags_for_documents___Web_of_Science_API_Expanded_https__developer_clarivate_com_apis_wos_offers_all_available_field_tags__The_following_table_lists_the_field_tags_that_are_supported_by_this_API___Field_Tag___Description_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________TI__________Title_of_document______________________________________________________________________________________________________________________________________________IS__________ISSN_or_ISBN___________________________________________________________________________________________________________________________________________________SO__________Source_title___The_result_contains_all_source_titles_within_product_database__for_example_journal_titles_and_or_book_titles_if_the_product_includes_books____VL__________Volume_________________________________________________________________________________________________________________________________________________________PG__________Page___________________________________________________________________________________________________________________________________________________________CS__________Issue__________________________________________________________________________________________________________________________________________________________PY__________Year_Published_________________________________________________________________________________________________________________________________________________AU__________Author_________________________________________________________________________________________________________________________________________________________AI__________Author_Identifier_________________________________________________________________________________________________________________________________________________________UT__________Accession_Number_______________________________________________________________________________________________________________________________________________DO__________DOI____________________________________________________________________________________________________________________________________________________________DT___________Document_Type_https__webofscience_help_clarivate_com_en_us_Content_document_types_html____________________________________________________________________________________________________________________________________________________________PMID________PubMed_ID______________________________________________________________________________________________________________________________________________________OG__________Search_for_preferred_organization_names_and_or_their_name_variants_from_the_Preferred_Organization_Index__p_A_search_on_a_preferred_organization_name_returns_all_records_that_contain_the_preferred_name_and_all_records_that_contain_its_name_variants__A_search_on_a_name_variant_returns_all_records_that_contain_the_variant__For_example_Cornell_Law_Sch_returns_all_records_that_contain_Cornell_Law_Sch_in_the_Addresses_field__p_When_searching_for_organization_names_that_contain_a_Boolean__AND_NOT_NEAR_and_SAME_always_enclose_the_word_in_quotation_marks_______For_example_p_____OG_Japan_Science_and_Technology_Agency__JST______br_____OG_Near_East_Univ_________br___OG_OR_Hlth_Sci_Univ______________________________TS__________Searches_for_topic_terms_in_the_following_fields_within_a_document_p___Title_br___Abstract_br___Author_keywords_br___Keywords_Plus_PaginationTo_ensure_fast_response_time_each_search_or_multiple_entity_calls__such_as__documents_retrieve_only_a_certain_number_of_hits_records_There_are_two_optional_request_parameters_to_browse_along_with_the_result58__limit__and__page____limit58_Number_of_returned_results_ranging_from_0_to_50__default_10__page58_Specifying_a_page_to_retrieve__default_1Moreover_this_information_is_shown_in_the_response_body_in_the_tag_metadata58jsonmetadata___total_91__page_1__limit_10_ErrorsThe_WoS_Journals_API_uses_conventional_HTTP_success_or_failure_status_codes__For_errors_some_extra_information_is_included_to_indicate_what_went_wrong_in_the_JSON_response__The_list_of_HTTP_codes_is_listed_below___Code____Title____Description_________________400____Bad_request____Request_syntax_error____401____Unauthorized____The_API_key_is_invalid_or_missed____404____Not_found____The_resource_is_not_found____405___Method_not_allowed___Method_other_than_GET_is_not_allowed____50X____Server_errors____Technical_error_with_servers_Each_error_response__except_401_Unauthorized_error_contains_the_code_of_the_error_the_title_of_the_error_and_detailed_description_of_the_error_a_misprint_in_an_endpoint_wrong_URL_parameter_etc__The_example_of_the_error_message_is_shown_belowjson__error_____status_404____title_Resource_couldnt_be_found____details_There_is_no_record_found_in_the_Web_of_Science_database__Please_check_your_query___For_the_401_Unauthorized_error_the_response_body_is_a_little_bit_differentjson__error_description_The_access_token_is_missing__error_invalid_request.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ClarivateWosStarterJsClient = require('index'); // See note below*.
* var xxxSvc = new ClarivateWosStarterJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ClarivateWosStarterJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ClarivateWosStarterJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ClarivateWosStarterJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AuthorName model constructor.
     * @property {module:model/AuthorName}
     */
    AuthorName,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The DocumentCitations model constructor.
     * @property {module:model/DocumentCitations}
     */
    DocumentCitations,

    /**
     * The DocumentIdentifiers model constructor.
     * @property {module:model/DocumentIdentifiers}
     */
    DocumentIdentifiers,

    /**
     * The DocumentKeywords model constructor.
     * @property {module:model/DocumentKeywords}
     */
    DocumentKeywords,

    /**
     * The DocumentLinks model constructor.
     * @property {module:model/DocumentLinks}
     */
    DocumentLinks,

    /**
     * The DocumentNames model constructor.
     * @property {module:model/DocumentNames}
     */
    DocumentNames,

    /**
     * The DocumentSource model constructor.
     * @property {module:model/DocumentSource}
     */
    DocumentSource,

    /**
     * The DocumentSourcePages model constructor.
     * @property {module:model/DocumentSourcePages}
     */
    DocumentSourcePages,

    /**
     * The DocumentsList model constructor.
     * @property {module:model/DocumentsList}
     */
    DocumentsList,

    /**
     * The Journal model constructor.
     * @property {module:model/Journal}
     */
    Journal,

    /**
     * The JournalLinks model constructor.
     * @property {module:model/JournalLinks}
     */
    JournalLinks,

    /**
     * The JournalsList model constructor.
     * @property {module:model/JournalsList}
     */
    JournalsList,

    /**
     * The Metadata model constructor.
     * @property {module:model/Metadata}
     */
    Metadata,

    /**
     * The OtherName model constructor.
     * @property {module:model/OtherName}
     */
    OtherName,

    /**
    * The DocumentsApi service constructor.
    * @property {module:api/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The JournalsApi service constructor.
    * @property {module:api/JournalsApi}
    */
    JournalsApi
};
