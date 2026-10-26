# API a3innuva ERP - a3factura · las 267 lecturas (GET)

Generado de la definición OpenAPI oficial del portal a3developers. Solo lecturas: en el curso no se escribe nada.

`*` = obligatorio. `query` = parámetros que van detrás de `?`. `→` = lo que devuelve (sus campos, en `schemas.md`). `permiso` = el permiso que necesita el usuario en a3innuva: si no lo tiene, la API responde 403.

Áreas: [Accounts](#accounts) (1), [Activities](#activities) (2), [Additionalmodules](#additionalmodules) (1), [Antifraudlaw](#antifraudlaw) (1), [Backoffice](#backoffice) (4), [Banks](#banks) (2), [Companies](#companies) (2), [Company](#company) (16), [Countries](#countries) (1), [Currencies](#currencies) (2), [Customers](#customers) (11), [Customschemas](#customschemas) (6), [Downloadfiles](#downloadfiles) (1), [Downloadinvoice](#downloadinvoice) (2), [Downloadreports](#downloadreports) (1), [Drafts](#drafts) (4), [Dues](#dues) (11), [Epigraphs](#epigraphs) (1), [Expensetypes](#expensetypes) (1), [Fees](#fees) (2), [Iban](#iban) (1), [Import](#import) (1), [Incometypes](#incometypes) (1), [Inventories](#inventories) (3), [Legalrepresentative](#legalrepresentative) (2), [License](#license) (1), [Migrations](#migrations) (3), [Modules](#modules) (3), [Myapplications](#myapplications) (3), [Organizations](#organizations) (2), [Paymentmethods](#paymentmethods) (2), [Paymenttypes](#paymenttypes) (2), [Processlogs](#processlogs) (4), [Products](#products) (9), [Provinces](#provinces) (1), [Purchasedeliverynotes](#purchasedeliverynotes) (9), [Purchasedocuments](#purchasedocuments) (11), [Purchaseinvoices](#purchaseinvoices) (10), [Purchaseoperationtypes](#purchaseoperationtypes) (1), [Purchaseorders](#purchaseorders) (9), [Queueprocess](#queueprocess) (1), [Rates](#rates) (2), [Registeredinvoices](#registeredinvoices) (5), [Regularizations](#regularizations) (2), [Remittances](#remittances) (6), [Representatives](#representatives) (4), [Saledeliverynotes](#saledeliverynotes) (10), [Saleinvoices](#saleinvoices) (17), [Saleoffers](#saleoffers) (12), [Saleoperationtypes](#saleoperationtypes) (2), [Saleorders](#saleorders) (10), [Series](#series) (2), [Subscription](#subscription) (1), [Suppliers](#suppliers) (7), [Supplyinvoices](#supplyinvoices) (8), [Tags](#tags) (1), [Taxrates](#taxrates) (3), [Ticketbai](#ticketbai) (6), [Tickets](#tickets) (5), [Token](#token) (4), [Users](#users) (3), [Webhooks](#webhooks) (2), [Withholdingkeys](#withholdingkeys) (1), [Withholdingsubkeys](#withholdingsubkeys) (1), [Zipcodes](#zipcodes) (2)

## Accounts

- `GET /api/accounts` — Accounts_Get · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `AccountDTOArray`

## Activities

- `GET /api/activities/{id}` — Get an activity by identifier → `ActivityDTO`
- `GET /api/activities` — Get all activities · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatActivityDTOArray`

## Additionalmodules

- `GET /api/additionalModules` — Get a list of available modules → `AdditionalModuleDTOArray`

## Antifraudlaw

- `GET /api/antifraudLaw/configuration` — Get Antifraude activation default data → `AntifraudLawConfigurationDTO`

## Backoffice

- `GET /api/backoffice/showNPS` — Get if the NPS form should be displayed → `ApiBackofficeShowNPSGet200ApplicationJsonResponse`
- `GET /api/backoffice/skipvideo` — Get skip video value → `ApiBackofficeSkipvideoGet200ApplicationJsonResponse`
- `GET /api/backoffice/productInfo` — Get information about the aplication → `ProductInfoDto`
- `GET /api/backoffice/showFirstUse` — Get if the first use wizard should be displayed → `ApiBackofficeShowFirstUseGet200ApplicationJsonResponse`

## Banks

- `GET /api/banks/{id}` — Get a bank by identifier → `BankDTO`
- `GET /api/banks` — Get all banks · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `BankDTOArray`

## Companies

- `GET /api/companies` — Companies_Get → `CompanyDtoArray`
- `GET /api/companies/{id}/image` — Gets the company image → `ApiCompaniesIdImageGet200ImageJpegResponse`

## Company

- `GET /api/company` — Get a company data → `CompanyDataDTO`
- `GET /api/company/image` — Get the company's image → `ApiCompanyImageGet200ImageJpegResponse`
- `GET /api/company/features` — Get the features of the company → `ApiCompanyFeaturesGet200ApplicationJsonResponse`
- `GET /api/company/settings` — Get company settings → `CompanySettingsDTO`
- `GET /api/company/ticketbai` — Get the company TBAI Info → `TBAIInfoDTO`
- `GET /api/company/fakeRealType` — Get company type data → `ApiCompanyFakeRealTypeGet200ApplicationJsonResponse`
- `GET /api/company/configuration` — Get the company configuration → `ConfigurationValueDTOArray`
- `GET /api/company/drafttemplates` — Get the company draft report templates → `ReportTemplateDTOArray`
- `GET /api/company/offertemplates` — Get the company offer report templates → `ReportTemplateDTOArray`
- `GET /api/company/ordertemplates` — Get the company order report templates → `ReportTemplateDTOArray`
- `GET /api/company/delierynotetemplates` — Get the company delivery note report templates → `ReportTemplateDTOArray`
- `GET /api/company/ticketbai/onboarding` — Get TicketBAI activation default data → `ElectronicBillActivationDTO`
- `GET /api/company/accountsgroups/{type}` — Get accounts groups → `AccountsGroupDTOArray`
- `GET /api/company/settings/antifraudlaw` — Get whether the company is allowed to access the api according to the antifraud regulation → `CompanySettingsAntifraudDTO`
- `GET /api/company/deliverylabeltemplates` — Get the company delivery labels report templates → `ReportTemplateDTOArray`
- `GET /api/company/invoicetemplates` — Get the company invoice report templates · query: tags → `ReportTemplateDTOArray`

## Countries

- `GET /api/countries` — Get all countries · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `CountryDTOArray`

## Currencies

- `GET /api/currencies/{code}` — Get a currency by code → `CurrencyDTO`
- `GET /api/currencies` — Get all currencies · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `CurrencyDTOArray`

## Customers

- `GET /api/customers/new` — Get a new customer with default values → `CustomerDTO`
- `GET /api/customers/{id}` — Get a customer by identifier → `CustomerDTO`
- `GET /api/customers/{id}/image` — Get the customer's image → `ApiCustomersIdImageGet200ImageJpegResponse`
- `GET /api/customers/{id}/fee/new` — Get a new fee of a specific customer → `FeeDTO`
- `GET /api/customers/{id}/addresses` — Get the addresses of a customer by identifier → `CustomerAddressDTOArray`
- `GET /api/customers/{id}/directdebits` — Get the direct debitings of a customer by identifier → `DirectDebitDTOArray`
- `GET /api/customers/{id}/feecollection` — Get the fees of a customer by identifier → `FeeDTOArray`
- `GET /api/customers/{customerId}/contacts` — Get the contacts by customer identifier → `CustomerContactDTOArray`
- `GET /api/customers/{id}/directdebit/{directDebitId}` — Get a direct debiting by identifier → `DirectDebitDTO`
- `GET /api/customers/{customerId}/contacts/{contactId}` — Get a contact by customer identifier → `CustomerContactDTO`
- `GET /api/customers` — Get all customers · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatCustomerDTOArray`

## Customschemas

- `GET /api/customschemas` — Get all company schemas → `CustomSchemaDTOArray`
- `GET /api/customschemas/{schema}` — Get a schema by name → `CustomSchemaDTO`
- `GET /api/customschemas/{schema}/entities` — Get all entities → `EntityDTOArray`
- `GET /api/customschemas/{schema}/entities/{entity}` — Get an entity → `EntityDTO`
- `GET /api/customschemas/{schema}/entities/{entity}/properties` — Get all properties of an entity → `PropertyDTOArray`
- `GET /api/customschemas/{schema}/entities/{entity}/properties/{property}` — Get a property → `PropertyDTO`

## Downloadfiles

- `GET /api/downloadFiles` — Get report file · query: id* → `ApiDownloadFilesGet200ApplicationOctet-streamResponse`

## Downloadinvoice

- `GET /downloadinvoice/sale/{idCDA}/{id}` — Gets the PDF file of a sale invoice → `DownloadinvoiceSaleIdCDAIdGet200ApplicationOctet-streamResponse`
- `GET /downloadinvoice/purchase/{idCDA}/{id}` — Gets the PDF file of a purchase invoice → `DownloadinvoicePurchaseIdCDAIdGet200ApplicationOctet-streamResponse`

## Downloadreports

- `GET /reports` — Gets the result of a report (PDF) · query: report* → `ReportsGet200ApplicationJsonResponse`

## Drafts

- `GET /api/drafts/{id}` — Get a draft by identifier → `DraftDTO`
- `GET /api/drafts/{id}/pdf` — Get the pdf of the draft using the invoice template with draft watermark · query: templateId → `Response`
- `GET /api/drafts/new` — Get a new draft by type · query: type*, thirdPartyId → `DraftDTO`
- `GET /api/drafts` — Get drafts by filter · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `DraftDTOArray`

## Dues

- `GET /api/dues/charges/{id}` — Get a charge by identifier → `ChargeDTO`
- `GET /api/dues/payments/{id}` — Get a payment by identifier → `PaymentDTO`
- `GET /api/dues` — Get all dues · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `DueDTOArray`
- `GET /api/dues/charges` — Get all charges · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `ChargeDTOArray`
- `GET /api/dues/payments` — Get all payments · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `PaymentDTOArray`
- `GET /api/dues/bank/weighted-charges` — Get all banks payments · query: amount, statementDate, concept, pageNumber, pageSize → `BankPaymentDtoArray`
- `GET /api/dues/bank/weighted-payments` — Get all banks payments · query: amount, statementDate, concept, pageNumber, pageSize → `BankChargeDtoArray`
- `GET /api/dues/bank/charges` — Get all banks charges · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `BankChargeDtoArray`
- `GET /api/dues/bank/payments` — Get all banks payments · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `BankPaymentDtoArray`
- `GET /api/dues/charges/export` — Export all dues charges · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiDuesChargesExportGet200ApplicationOctet-streamResponse`
- `GET /api/dues/payments/export` — Export all dues payments · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiDuesPaymentsExportGet200ApplicationOctet-streamResponse`

## Epigraphs

- `GET /api/epigraphs` — Get all TicketBai Epigraph · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `EpigraphDTOArray`

## Expensetypes

- `GET /api/expenseTypes` — Get all expense types · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `ExpenseTypeDTOArray`

## Fees

- `GET /api/fees/log/{id}` — Fees_GetFeePeriodLog → `FeePeriodLogDTO`
- `GET /api/fees/{year}/{month}` — Get the fees of a specific time period {Year}/{Month} · query: tags, activityId → `PeriodFeeDTOArray`

## Iban

- `GET /api/iban/swift` — Get a swift by iban · query: iban* → `ApiIbanSwiftGet200ApplicationJsonResponse`

## Import

- `GET /api/import/downloadTemplate/{entity}` — Download the template to import an entity → `ApiImportDownloadTemplateEntityGet200ApplicationOctet-streamResponse`

## Incometypes

- `GET /api/incomeTypes` — Get all income types · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `IncomeTypeDTOArray`

## Inventories

- `GET /api/inventories/{id}` — Get an inventory → `InventoryDtoWithWarehouse`
- `GET /api/inventories` — Get all inventory · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `InventoryDTOArray`
- `GET /api/inventories/{inventoryCorrelationId}/lines` — Get inventory lines · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `InventoryLineDtoArray`

## Legalrepresentative

- `GET /api/legalRepresentative` — Obtener el represenante legal de la empresa logeada → `ApiLegalRepresentativeGet200ApplicationJsonResponse`
- `GET /api/legalRepresentative/pdf` — Get the pdf of the legal representation document → `Response`

## License

- `GET /api/license` — Get license → `LicenseDTO`

## Migrations

- `GET /api/migrations/validateaccountsorigin` — Validate data before start the migration in origin company. → `Response`
- `GET /api/migrations/validatedocumentsorigin` — Validate data before start the migration in origin company. → `Response`
- `GET /api/migrations/duration/{migrationScenario}` — Obtiene la duración estimada de la migración según el escenario especificado. → `Response`

## Modules

- `GET /api/modules/{applicationName}` — Get the module → `ModuleTokenDTO`
- `GET /api/modules/registerToken/{applicationName}` — Get a token for register an application → `ApiModulesRegisterTokenApplicationNameGet200ApplicationJsonResponse`
- `GET /api/modules/unregisterToken/{applicationName}` — Get a token for unregister an application → `ApiModulesUnregisterTokenApplicationNameGet200ApplicationJsonResponse`

## Myapplications

- `GET /api/myapplications` — Get my applications → `ApplicationDTOArray`
- `GET /api/myapplications/{name}` — Get the application token → `TokenDTO`
- `GET /api/myapplications/application/{name}` — Get my application → `ApplicationTokenDTO`

## Organizations

- `GET /api/organizations/vatTypeNumber` — Get a Vat number type from a vat number · query: vatNumber* → `ApiOrganizationsVatTypeNumberGet200ApplicationJsonResponse`
- `GET /api/organizations` — Get all organizations · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `OrganizationDTOArray`

## Paymentmethods

- `GET /api/paymentMethods/{id}` — Get a payment method by identifier → `PaymentMethodDTO`
- `GET /api/paymentMethods` — Get all payment methods · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `PaymentMethodDTOArray`

## Paymenttypes

- `GET /api/paymentTypes/{id}` — Get a payment type by identifier → `SerieDTO`
- `GET /api/paymentTypes` — Get all payment types · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `PaymentTypeDTOArray`

## Processlogs

- `GET /api/processLogs/{id}` — Get a process log by identifier → `ProcessLogDTO`
- `GET /api/processLogs/{id}/issues` — Get a list of issues from a parent log item → `ProcessResultDTOArray`
- `GET /api/processLogs` — Get all process logs · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `ProcessLogFlatDTOArray`
- `GET /api/processLogs/export` — Process log note export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiProcessLogsExportGet200ApplicationOctet-streamResponse`

## Products

- `GET /api/products/new` — Get a new product with default values → `ProductDTO`
- `GET /api/products/{id}` — Get a product by identifier → `ProductDTO`
- `GET /api/products/{productId}/kits` — Get configuration and components of a kit → `KitProductConfigurationDto`
- `GET /api/products/{productId}/image` — Get the products's image → `ApiProductsProductIdImageGet200ImageJpegResponse`
- `GET /api/products/{productId}/rates` — Get all sale rates of a product → `SaleRateDTOArray`
- `GET /api/products/{productId}/rates/{rateId}` — Get a sale rate by identifier → `SaleRateDTO`
- `GET /api/products/{productId}/stockinformation` — Get stock information by product identifier → `StockInformationDTO`
- `GET /api/products` — Get all products · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatProductDTOArray`
- `GET /api/products/export` — Export all products with filters · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiProductsExportGet200ApplicationOctet-streamResponse`

## Provinces

- `GET /api/provinces` — Get all provinces · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `ProvinceDTOArray`

## Purchasedeliverynotes

- `GET /api/purchaseDeliveryNotes/{id}` — Get a purchase delivery note by Id → `PurchaseDeliveryNoteDTO`
- `GET /api/purchaseDeliveryNotes/{id}/circuitinfo` — Get circuit info lines → `CircuitInfoDTOArray`
- `GET /api/purchaseDeliveryNotes/new` — Get a new purchase delivery note with default values · query: supplierId → `PurchaseDeliveryNoteDTO`
- `GET /api/purchaseDeliveryNotes/{id}/pdf` — Get the pdf of the document · query: templateId → `Response`
- `GET /api/purchaseDeliveryNotes/{id}/line/{lineId}/documentlineinfo` — Get document line info → `DocumentLineInfoDTOArray`
- `GET /api/purchaseDeliveryNotes/{id}/line/{lineId}/destinationdocumentscount` — Get destination documents count → `ApiPurchaseDeliveryNotesIdLineLineIdDestinationdocumentscountGet200Applicati`
- `GET /api/purchaseDeliveryNotes/newLine` — Get a new purchase delivery note line with default values · query: supplierId, productId → `PurchaseDeliveryNoteDTO`
- `GET /api/purchaseDeliveryNotes` — Get all purchase delivery notes · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatPurchaseDeliveryNoteDTOArray`
- `GET /api/purchaseDeliveryNotes/export` — Export all purchase delivery notes with filters · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiPurchaseDeliveryNotesExportGet200ApplicationOctet-streamResponse`

## Purchasedocuments

- `GET /api/purchaseDocuments/{id}` — Get a purchase document → `PurchaseDocumentDTO`
- `GET /api/purchaseDocuments/{id}/dues` — Get the dues of a purchase document(supply or purchase) → `DueDTOArray`
- `GET /api/purchaseDocuments/{id}/clone` — Get a clone of purchase document → `PurchaseDocumentDTO`
- `GET /api/purchaseDocuments/{id}/rectify` — Get rectify invoice by purchase invoice → `PurchaseDocumentDTO`
- `GET /api/purchaseDocuments/{id}/attachment` — Get purchase document file attachment → `ApiPurchaseDocumentsIdAttachmentGet200ApplicationOctet-streamResponse`
- `GET /api/purchaseDocuments/{id}/pdf` — Get the purchase invoice pdf · query: templateId → `Response`
- `GET /api/purchaseDocuments/newLine` — Get a new purchase document line with default values · query: supplierId, productId → `PurchaseInvoiceLineDTO`
- `GET /api/purchaseDocuments/new` — Get a new purchase document with default values · query: documentType*, supplierId → `PurchaseDocumentDTO`
- `GET /api/purchaseDocuments` — Get all purchase documents · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatPurchaseDocumentDTOArray`
- `GET /api/purchaseDocuments/export` — Purchase documents export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiPurchaseDocumentsExportGet200ApplicationOctet-streamResponse`
- `GET /api/purchaseDocuments/extendedExport` — Export extended purchase documents · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiPurchaseDocumentsExtendedExportGet200ApplicationOctet-streamResponse`

## Purchaseinvoices

- `GET /api/purchaseInvoices/{id}` — Get a purchase invoice → `PurchaseInvoiceDTO`
- `GET /api/purchaseInvoices/{id}/dues` — Get the dues of a purchase invoice → `PaymentDTOArray`
- `GET /api/purchaseInvoices/{id}/rectify` — Get rectify invoice by purchase invoice → `PurchaseInvoiceDTO`
- `GET /api/purchaseInvoices/{id}/attachment` — Get purchase invoice file attachment → `ApiPurchaseInvoicesIdAttachmentGet200ApplicationOctet-streamResponse`
- `GET /api/purchaseInvoices/additionaldata/regimes` — Get SII regimes types → `SiiRegimeTypeDTOArray`
- `GET /api/purchaseInvoices/additionaldata/invoices` — Get SII Invoice types → `SiiInvoiceTypeDTOArray`
- `GET /api/purchaseInvoices/new` — Get a new purchase invoice with default values · query: supplierId → `PurchaseInvoiceDTO`
- `GET /api/purchaseInvoices/{id}/pdf` — Get the purchase invoice pdf · query: templateId → `Response`
- `GET /api/purchaseInvoices/newLine` — Get a new purchase invoice line with default values · query: supplierId, productId → `PurchaseInvoiceLineDTO`
- `GET /api/purchaseInvoices` — Get all purchase invoices · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatPurchaseInvoiceDTOArray`

## Purchaseoperationtypes

- `GET /api/purchaseOperationTypes` — Get all purchase operation types · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `PurchaseOperationTypeDTOArray`

## Purchaseorders

- `GET /api/purchaseOrders/{id}` — Get a purchase order by Id → `PurchaseOrderDTO`
- `GET /api/purchaseOrders/{id}/circuitinfo` — Get circuit info lines → `CircuitInfoDTOArray`
- `GET /api/purchaseOrders/new` — Get a new purchase order with default values · query: supplierId → `PurchaseOrderDTO`
- `GET /api/purchaseOrders/{id}/pdf` — Get the pdf of the document · query: templateId → `Response`
- `GET /api/purchaseOrders/{id}/line/{lineId}/documentlineinfo` — Get document line info → `DocumentLineInfoDTOArray`
- `GET /api/purchaseOrders/{id}/line/{lineId}/destinationdocumentscount` — Get destination documents count → `ApiPurchaseOrdersIdLineLineIdDestinationdocumentscountGet200ApplicationJsonR`
- `GET /api/purchaseOrders/newLine` — Get a new purchase order line with default values · query: supplierId, productId → `PurchaseOrderLineDTO`
- `GET /api/purchaseOrders` — Get all purchase orders · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatPurchaseOrderDTOArray`
- `GET /api/purchaseOrders/export` — Purchase orders export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiPurchaseOrdersExportGet200ApplicationOctet-streamResponse`

## Queueprocess

- `GET /api/queueProcess/processmigration` — QueueProcess_GetProcessMigration → `MigrationMonitoringDtoArray`

## Rates

- `GET /api/rates/{id}` — Get a rate by identifier → `RateDTO`
- `GET /api/rates` — Get all rates · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `RateDTOArray`

## Registeredinvoices

- `GET /api/registeredInvoices/{id}/xml` — Get the xml of the registered invoice → `Response`
- `GET /api/registeredInvoices/{id}/footPrint` — Get Qr of a resgistered invoice → `AntifraudLawFootPrintDTO`
- `GET /api/registeredInvoices/{id}/sendResponse` — Get the response obtained when sending a registered invoice → `ApiRegisteredInvoicesIdSendResponseGet200ApplicationJsonResponse`
- `GET /api/registeredInvoices` — Get all registered invoices · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `AntifraudLawInvoiceLogDTOArray`
- `GET /api/registeredInvoices/export` — Export all registered invoices · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiRegisteredInvoicesExportGet200ApplicationOctet-streamResponse`

## Regularizations

- `GET /api/regularizations/{id}` — Get a Regularization by identifier → `RegularizationDTO`
- `GET /api/regularizations` — Get all Regularizations · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `RegularizationDTOArray`

## Remittances

- `GET /api/remittances/new` — Get a new remittance with default values → `RemittanceDTO`
- `GET /api/remittances/{id}` — Get a remittance by identifier → `RemittanceDTO`
- `GET /api/remittances/{id}/duesCollection/count` — Count Remittance Dues → `ApiRemittancesIdDuesCollectionCountGet200ApplicationJsonResponse`
- `GET /api/remittances/{id}/duesCollection/getFirst` — Get the minimun date of the dues → `ApiRemittancesIdDuesCollectionGetFirstGet200ApplicationJsonResponse`
- `GET /api/remittances` — Get all remittances · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatRemittanceDTOArray`
- `GET /api/remittances/extendedExport` — Export extended sale invoices · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiRemittancesExtendedExportGet200ApplicationOctet-streamResponse`

## Representatives

- `GET /api/representatives/new` — Get a new representative with default values → `RepresentativeDTO`
- `GET /api/representatives/{id}` — Get a representive by identifier → `RepresentativeDTO`
- `GET /api/representatives` — Get all representatives · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `RepresentativeDTOArray`
- `GET /api/representatives/export` — Export all representative with filters · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiRepresentativesExportGet200ApplicationOctet-streamResponse`

## Saledeliverynotes

- `GET /api/saleDeliveryNotes/{id}` — Get a sale delivery note → `SaleDeliveryNoteDTO`
- `GET /api/saleDeliveryNotes/{id}/circuitinfo` — Get circuit info lines → `CircuitInfoDTOArray`
- `GET /api/saleDeliveryNotes/new` — Get a new sale delivery note with default values · query: customerId → `SaleDeliveryNoteDTO`
- `GET /api/saleDeliveryNotes/{id}/pdf` — Get the pdf of the document · query: templateId → `Response`
- `GET /api/saleDeliveryNotes/{id}/line/{lineId}/documentlineinfo` — Get document line info → `DocumentLineInfoDTOArray`
- `GET /api/saleDeliveryNotes/{id}/line/{lineId}/destinationdocumentscount` — Get destination documents count → `ApiSaleDeliveryNotesIdLineLineIdDestinationdocumentscountGet200ApplicationJs`
- `GET /api/saleDeliveryNotes/newLine` — Get a new sale delivery note line with default values · query: customerId, productId → `SaleDeliveryNoteLineDto`
- `GET /api/saleDeliveryNotes/{id}/deliveryLabels` — Get the delivery labels of a document · query: numberOfPackages, templateId → `Response`
- `GET /api/saleDeliveryNotes` — Get all sale delivery notes · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatSaleDeliveryNoteDTOArray`
- `GET /api/saleDeliveryNotes/export` — Sale delivery note export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiSaleDeliveryNotesExportGet200ApplicationOctet-streamResponse`

## Saleinvoices

- `GET /api/saleInvoices/{id}` — Get a sale invoice → `SaleInvoiceDTO`
- `GET /api/saleInvoices/{id}/dues` — Get the dues of a sale invoice → `DueDTOArray`
- `GET /api/saleInvoices/{id}/clone` — Get a clone of a sale invoice → `SaleInvoiceDTO`
- `GET /api/saleInvoices/lineEditInfo` — Get line fields blocked according to the LATF → `EditableInfoElectronicInvoiceLinesDTO`
- `GET /api/saleInvoices/{id}/rectify` — Get rectify invoice by sale invoice → `SaleInvoiceDTO`
- `GET /api/saleInvoices/headerEditInfo` — Get header fields blocked according to the LATF → `EditableInfoElectronicInvoiceHeaderDTO`
- `GET /api/saleInvoices/{id}/tbaiImage` — Get a sale invoice TBai Image → `TBAIFootPrintDTO`
- `GET /api/saleInvoices/{id}/sentStatus` — Gets the information about a sent document → `SentDocumentStatusDTO`
- `GET /api/saleInvoices/additionaldata/regimes` — Get SII regimes types → `SiiRegimeTypeDTOArray`
- `GET /api/saleInvoices/additionaldata/invoices` — Get SII Invoice types → `SiiInvoiceTypeDTOArray`
- `GET /api/saleInvoices/new` — Get a new sale invoice with default values · query: customerId → `SaleInvoiceDTO`
- `GET /api/saleInvoices/{id}/pdf` — Get the pdf of the document · query: templateId → `Response`
- `GET /api/saleInvoices/newLine` — Get a new sale invoice line with default values · query: customerId, productId → `SaleInvoiceLineDTO`
- `GET /api/saleInvoices/allowcustominvoicenumber` — Get if is allowed inform custom invoice number · query: serie*, activity* → `ApiSaleInvoicesAllowcustominvoicenumberGet200ApplicationJsonResponse`
- `GET /api/saleInvoices` — Get all sale invoices · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatSaleInvoiceDTOArray`
- `GET /api/saleInvoices/export` — Sale invoice export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiSaleInvoicesExportGet200ApplicationOctet-streamResponse`
- `GET /api/saleInvoices/extendedExport` — Export extended sale invoices · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiSaleInvoicesExtendedExportGet200ApplicationOctet-streamResponse`

## Saleoffers

- `GET /api/saleOffers/{id}` — Get a sale offer → `SaleOfferDTO`
- `GET /api/saleOffers/{id}/clone` — Get a clone of a sale offer → `SaleOfferDTO`
- `GET /api/saleOffers/{id}/sentStatus` — Gets the information about a sent document → `SentDocumentStatusDTO`
- `GET /api/saleOffers/{id}/circuitinfo` — Get circuit info lines → `CircuitInfoDTOArray`
- `GET /api/saleOffers/new` — Get a new sale offers with default values · query: customerId → `SaleOfferDTO`
- `GET /api/saleOffers/{id}/pdf` — Get the pdf of the document · query: templateId → `Response`
- `GET /api/saleOffers/{id}/line/{lineId}/documentlineinfo` — Get document line info → `DocumentLineInfoDTOArray`
- `GET /api/saleOffers/{id}/line/{lineId}/destinationdocumentscount` — Get destination documents count → `ApiSaleOffersIdLineLineIdDestinationdocumentscountGet200ApplicationJsonRespo`
- `GET /api/saleOffers/newLine` — Get a new sale offer line with default values · query: customerId, productId → `SaleOfferLineDTO`
- `GET /api/saleOffers` — Get all sale offers · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatSaleOfferDTOArray`
- `GET /api/saleOffers/export` — Sale offers export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiSaleOffersExportGet200ApplicationOctet-streamResponse`
- `GET /api/saleOffers/extendedExport` — sale offers extended export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiSaleOffersExtendedExportGet200ApplicationOctet-streamResponse`

## Saleoperationtypes

- `GET /api/saleOperationTypes/taxTypeIsCompatible` — Get skip video value · query: taxTypeCode*, saleOperationCode* → `ApiSaleOperationTypesTaxTypeIsCompatibleGet200ApplicationJsonResponse`
- `GET /api/saleOperationTypes` — Get all sale operation types · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `SaleOperationTypeDTOArray`

## Saleorders

- `GET /api/saleOrders/{id}` — Get a sale order → `SaleOrderDTO`
- `GET /api/saleOrders/{id}/sentStatus` — Gets the information about a sent document → `SentDocumentStatusDTO`
- `GET /api/saleOrders/{id}/circuitinfo` — Get circuit info lines → `CircuitInfoDTOArray`
- `GET /api/saleOrders/new` — Get a new sale order with default values · query: customerId → `SaleOrderDTO`
- `GET /api/saleOrders/{id}/pdf` — Get the pdf of the document · query: templateId → `Response`
- `GET /api/saleOrders/{id}/line/{lineId}/documentlineinfo` — Get document line info → `DocumentLineInfoDTOArray`
- `GET /api/saleOrders/{id}/line/{lineId}/destinationdocumentscount` — Get destination documents count → `ApiSaleOrdersIdLineLineIdDestinationdocumentscountGet200ApplicationJsonRespo`
- `GET /api/saleOrders/newLine` — Get a new sale order line with default values · query: customerId, productId → `SaleOrderLineDTO`
- `GET /api/saleOrders` — Get all sale orders · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatSaleOrderDTOArray`
- `GET /api/saleOrders/export` — Sale orders export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiSaleOrdersExportGet200ApplicationOctet-streamResponse`

## Series

- `GET /api/series/{id}` — Get a serie by identifier → `SerieDTO`
- `GET /api/series` — Get all series · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatSerieDTOArray`

## Subscription

- `GET /api/subscription/{name}` — Get subscription application → `SubscriptionDTO`

## Suppliers

- `GET /api/suppliers/new` — Get a new supplier with default values → `SupplierDTO`
- `GET /api/suppliers/{id}` — Get a supplier by identifier → `SupplierDTO`
- `GET /api/suppliers/{id}/image` — Get the supplier's image → `ApiSuppliersIdImageGet200ImageJpegResponse`
- `GET /api/suppliers/{id}/directdebits` — Get the direct debitings of a supplier by identifier → `DirectDebitDTOArray`
- `GET /api/suppliers/{id}/directdebit/{directDebitId}` — Get a direct debiting by identifier → `DirectDebitDTO`
- `GET /api/suppliers` — Get all suppliers · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatSupplierDTOArray`
- `GET /api/suppliers/export` — Export all suppliers · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiSuppliersExportGet200ApplicationOctet-streamResponse`

## Supplyinvoices

- `GET /api/supplyInvoices/{id}` — Get a supply invoice → `SupplyInvoiceDTO`
- `GET /api/supplyInvoices/{id}/dues` — Get the dues of a supply invoice → `PaymentDTOArray`
- `GET /api/supplyInvoices/{id}/attachment` — Get supply invoice file attachment → `ApiSupplyInvoicesIdAttachmentGet200ApplicationOctet-streamResponse`
- `GET /api/supplyInvoices/additionaldata/regimes` — Get SII regimes types → `SiiRegimeTypeDTOArray`
- `GET /api/supplyInvoices/additionaldata/invoices` — Get SII Invoice types → `SiiInvoiceTypeDTOArray`
- `GET /api/supplyInvoices/new` — Get a new supply invoice with default values · query: supplierId → `SupplyInvoiceDTO`
- `GET /api/supplyInvoices/newLine` — Get a new supply invoice line with default values · query: supplierId → `SupplyInvoiceLineDTO`
- `GET /api/supplyInvoices` — Get all supply invoices · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatSupplyInvoiceDTOArray`

## Tags

- `GET /api/tags` — Get all Tags · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `TagDTOArray`

## Taxrates

- `GET /api/taxrates` — Get all tax rates → `TaxRateDTOArray`
- `GET /api/taxrates/{date}` — Get rates of a date → `TaxRateDTOArray`
- `GET /api/taxrates/{code}/{date}` — Get rate of a tax type by date → `TaxRateDTO`

## Ticketbai

- `GET /api/ticketBai/{id}/pdf` — Get the pdf of the TicketBai invoice → `Response`
- `GET /api/ticketBai/{id}/xml` — Get the xml of the TicketBAI invoice → `Response`
- `GET /api/ticketBai/{id}/footPrint` — Get TicketBAI Image → `TBAIFootPrintDTO`
- `GET /api/ticketBai/{id}/sendResponse` — Get send response → `ApiTicketBaiIdSendResponseGet200ApplicationJsonResponse`
- `GET /api/ticketBai` — Get all TicketBAI invoices · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `TicketBAIDTOArray`
- `GET /api/ticketBai/export` — TicketBAI invoice relation export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiTicketBaiExportGet200ApplicationOctet-streamResponse`

## Tickets

- `GET /api/tickets/new` — Get a new ticket with default values → `TicketDTO`
- `GET /api/tickets/{id}` — Get a ticket → `TicketDTO`
- `GET /api/tickets/{id}/attachment` — Get ticket file attachment → `ApiTicketsIdAttachmentGet200ApplicationOctet-streamResponse`
- `GET /api/tickets` — Get all tickets · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `FlatTicketDTOArray`
- `GET /api/tickets/export` — expense tickets export · query: format, headers, title, pageNumber, pageSize, selection, orderBy, searchBy, filter → `ApiTicketsExportGet200ApplicationOctet-streamResponse`

## Token

- `GET /api/token/tenants` — Token_Get → `CompanyLicensingDTOArray`
- `GET /api/token/checkToken` — Check if any token is valid → `ApiTokenCheckTokenGet200ApplicationJsonResponse`
- `GET /api/token/tenants/{id}/image` — Gets the company image → `ApiTokenTenantsIdImageGet200ImageJpegResponse`
- `GET /api/token/validateToken` — Check if a a3factura token is valid · query: authorization* → `Response`

## Users

- `GET /api/users/logout` — Logout → `ApiUsersLogoutGet200ApplicationJsonResponse`
- `GET /api/users/checkresetpassword` — Check if token is valid · query: token* → `Response`
- `GET /api/users/authenticateToken` — Validates the token and login user into application · query: token*, refreshToken* → `LoginResponse`

## Webhooks

- `GET /api/webhooks` — Get all webhooks → `ApiWebhooksGet200ApplicationJsonResponse`
- `GET /api/webhooks/{id}` — Get a webhook → `ApiWebhooksIdGet200ApplicationJsonResponse`

## Withholdingkeys

- `GET /api/withholdingkeys` — Get all with holding keys · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `WithHoldingKeyDTOArray`

## Withholdingsubkeys

- `GET /api/withholdingsubkeys` — Get all with holding sub keys · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `WithHoldingSubKeyDTOArray`

## Zipcodes

- `GET /api/zipcodes/{code}` — Get a zip code by code → `ZipCodeDTO`
- `GET /api/zipcodes` — Get all zip codes · query: pageNumber, pageSize, selection, orderBy, searchBy, filter → `ZipCodeDTOArray`
