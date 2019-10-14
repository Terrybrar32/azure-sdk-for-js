let nock = require('nock');

module.exports.testInfo = {"share":"share156775317577604149","dir":"dir156775317617205730","file":"file156775317658502873"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775317577604149')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:36 GMT',
  'ETag',
  '"0x8D73297C73EBA85"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '743f03f7-101a-009f-0880-64bb81000000',
  'x-ms-client-request-id',
  'c316736e-1c60-4abf-a0ad-68ae617c7715',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Fri, 06 Sep 2019 06:59:35 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775317577604149/dir156775317617205730')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:36 GMT',
  'ETag',
  '"0x8D73297C77D9E0A"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '3869393f-001a-00ce-2680-64260d000000',
  'x-ms-client-request-id',
  'acb4cf87-bf84-4ea2-a245-232c65f43012',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T06:59:36.4563466Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:36.4563466Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:36.4563466Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:36 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775317577604149/dir156775317617205730/file156775317658502873')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:36 GMT',
  'ETag',
  '"0x8D73297C7BADCF9"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'fa60225d-201a-0094-0780-6440ea000000',
  'x-ms-client-request-id',
  '7358a858-bd3d-432f-ba71-716775f3c15a',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T06:59:36.8577273Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:36.8577273Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:36.8577273Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:36 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share156775317577604149/dir156775317617205730/file156775317658502873')
  .reply(200, "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:36 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D73297C7BADCF9"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '27815061-f01a-00f5-0e80-6463a9000000',
  'x-ms-client-request-id',
  '3238131e-7852-42f4-807c-c7da98571ac3',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-06T06:59:36.8577273Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:36.8577273Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:36.8577273Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 06 Sep 2019 06:59:36 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156775317577604149')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'fb78d508-401a-002b-1880-64774f000000',
  'x-ms-client-request-id',
  '19ac40c2-b7c2-4005-8ebd-af5a38cff5b3',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Fri, 06 Sep 2019 06:59:37 GMT',
  'Connection',
  'close' ]);
