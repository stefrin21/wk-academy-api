# API a3innuva ERP - a3factura · los campos de las respuestas

Un apartado por tipo de respuesta, con sus campos y su tipo. Los datos son inventados: los de personas (nombre, DNI, NAF, importes) también se pueden usar.

## AccountDTO

- `description` (string)
- `code` (string)
- `id` (string)
- `legacyId` (integer)

## AccountDTOArray

Lista de `AccountDTO`.

## AccountsGroupDTO

- `code` (string): Code
- `description` (string): Description

## AccountsGroupDTOArray

Lista de `AccountsGroupDTO`.

## ActivityDTO

- `id` (string): Identifier
- `code` (string): Code
- `name` (string): Name
- `ecoCompany` (string): Código de empresa a3ASESOR|eco (5 posiciones numéricas y longitud fija)
- `ecoActivity` (string): Código de actividad a3ASESOR|eco. 2 posiciones numéricas Rango de valores: del 01-10
- `epigraphId` (integer): Epigraph id
- `epigraphCode` (string): Epigraph code. ReadOnly
- `epigraphDescription` (string): Epigraph description. ReadOnly
- `regimen` (integer): Regimen (1 - General, 2 - Simplificado, 3 - Recargo de equivalencia)
- `taxation` (integer): Tributación (1 - Estatal, 2 - Canarias)
- `description` (string): Descripción (aplica a a3InnuvaERP)
- `adhereToTicketBai` (boolean): AdhereToTicketBai for Canarian Taxation
- `isElectronicBillingExcluded` (boolean): Indicates whether the activity is excluded from electronic billing

## AdditionalModuleDTO

- `name` (string)
- `description` (string)
- `subscribeEndPoint` (string)
- `unsubscribeEndPoint` (string)
- `partnerName` (string)
- `state` (integer)
- `frontOfficeURL` (string)
- `logo` ([])

## AdditionalModuleDTOArray

Lista de `AdditionalModuleDTO`.

## AddressDTO

- `correlationId` (string): Read Only GUID Correlation Id
- `street` (string): MainAddress
- `town` (string): Town
- `zipCode` (string): ZipCode
- `provinceCode` (string): Province code
- `provinceName` (string): Province name
- `countryCode` (string): Country code
- `localization` (string): Localization

## AntifraudLawConfigurationDTO

- `activation` (boolean): Si esta Acogido al Reglamento de la Ley Antifraude.
- `veriFactuActivation` (boolean): Si verifactu esta activado o no
- `veriFactuEndDate` (string:date-time): If we abandon verifactu we will stop sending invoices to the verifactu system at this date
- `motiveNotUse` (integer): Motivo no Acogido a LAF Acogido al Sii = 1, Empresa fuera Espana= 2, Empresa estabelecida pais Vasco y Sujeta a TicketBai = 3, Empresa estabelecida Navarra = 4, Solicitud de no aplicacion Art5 = 5 Fuera del ámbito subjetivo del artículo 3.1 = 6
- `codeResignation` (string): Código suministrado por Hacienda
- `confirmationNotRequiredToUse` (boolean): Confirmacion si realmente no esta acogido a LAF Requerido si informa motivo de no acogido
- `acceptationDate` (string:date-time)
- `isProvisional` (boolean)
- `isRepresentationAuthorized` (boolean)
- `configuredTimes` (integer): Indica el número de veces que se ha configurado la ley antifraude en la empresa.
- `digitalCertificateSigned` (boolean)
- `deadlineNewUsers` (string:date-time)
- `corporateDeadlineDate` (string:date-time)
- `generalEffectiveDate` (string:date-time)
- `provisionalDate` (string:date-time)

## AntifraudLawFootPrintDTO

- `identifier` (string): Identifier
- `qrImage` ([]): QRImage
- `qrCode` (string): QRCode

## AntifraudLawInvoiceLogDTO

- `id` (string)
- `operationDescription` (string)
- `logDate` (string:date-time)
- `invoiceDate` (string:date-time)
- `invoiceNumber` (string)
- `customerName` (string)
- `invoiceAmount` (number:double)
- `logStatus` (integer)
- `logStatusDescription` (string)
- `invoiceType` (integer)
- `sentDate` (string:date-time)
- `eInvoiceLogAnomalies` (EInvoiceLogAnomalyDTO[])
- `customerVATCode` (string)
- `aeatResponseCode` (string)
- `aeatResponseDescription` (string)

## AntifraudLawInvoiceLogDTOArray

Lista de `AntifraudLawInvoiceLogDTO`.

## ApiBackofficeShowFirstUseGet200ApplicationJsonResponse


## ApiBackofficeShowNPSGet200ApplicationJsonResponse


## ApiBackofficeSkipvideoGet200ApplicationJsonResponse


## ApiCompaniesIdImageGet200ImageJpegResponse

Lista de ``.

## ApiCompanyFakeRealTypeGet200ApplicationJsonResponse

Valores: Unknown, Real, Fake

## ApiCompanyFeaturesGet200ApplicationJsonResponse

Lista de `string`.

## ApiCompanyImageGet200ImageJpegResponse

Lista de ``.

## ApiCustomersIdImageGet200ImageJpegResponse

Lista de ``.

## ApiDownloadFilesGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiDuesChargesExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiDuesPaymentsExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiIbanSwiftGet200ApplicationJsonResponse


## ApiImportDownloadTemplateEntityGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiLegalRepresentativeGet200ApplicationJsonResponse


## ApiModulesRegisterTokenApplicationNameGet200ApplicationJsonResponse


## ApiModulesUnregisterTokenApplicationNameGet200ApplicationJsonResponse


## ApiOrganizationsVatTypeNumberGet200ApplicationJsonResponse


## ApiProcessLogsExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiProductsExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiProductsProductIdImageGet200ImageJpegResponse

Lista de ``.

## ApiPurchaseDeliveryNotesExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiPurchaseDeliveryNotesIdLineLineIdDestinationdocumentscountGet200Applicati


## ApiPurchaseDocumentsExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiPurchaseDocumentsExtendedExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiPurchaseDocumentsIdAttachmentGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiPurchaseInvoicesIdAttachmentGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiPurchaseOrdersExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiPurchaseOrdersIdLineLineIdDestinationdocumentscountGet200ApplicationJsonR


## ApiRegisteredInvoicesExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiRegisteredInvoicesIdSendResponseGet200ApplicationJsonResponse


## ApiRemittancesExtendedExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiRemittancesIdDuesCollectionCountGet200ApplicationJsonResponse


## ApiRemittancesIdDuesCollectionGetFirstGet200ApplicationJsonResponse


## ApiRepresentativesExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiSaleDeliveryNotesExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiSaleDeliveryNotesIdLineLineIdDestinationdocumentscountGet200ApplicationJs


## ApiSaleInvoicesAllowcustominvoicenumberGet200ApplicationJsonResponse


## ApiSaleInvoicesExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiSaleInvoicesExtendedExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiSaleOffersExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiSaleOffersExtendedExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiSaleOffersIdLineLineIdDestinationdocumentscountGet200ApplicationJsonRespo


## ApiSaleOperationTypesTaxTypeIsCompatibleGet200ApplicationJsonResponse


## ApiSaleOrdersExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiSaleOrdersIdLineLineIdDestinationdocumentscountGet200ApplicationJsonRespo


## ApiSuppliersExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiSuppliersIdImageGet200ImageJpegResponse

Lista de ``.

## ApiSupplyInvoicesIdAttachmentGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiTicketBaiExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiTicketBaiIdSendResponseGet200ApplicationJsonResponse


## ApiTicketsExportGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiTicketsIdAttachmentGet200ApplicationOctet-streamResponse

Lista de ``.

## ApiTokenCheckTokenGet200ApplicationJsonResponse


## ApiTokenTenantsIdImageGet200ImageJpegResponse

Lista de ``.

## ApiUsersLogoutGet200ApplicationJsonResponse


## ApiWebhooksGet200ApplicationJsonResponse


## ApiWebhooksIdGet200ApplicationJsonResponse


## ApplicationDTO

- `id` (string)
- `name` (string)
- `description` (string)
- `eMail` (string)

## ApplicationDTOArray

Lista de `ApplicationDTO`.

## ApplicationInfoDto

- `frontOfficeURL` (string)
- `name` (string)

## ApplicationTokenDTO

- `id` (string)
- `application` (ApplicationDTO)
- `company` (CompanyDto)
- `token` (string)
- `refresh` (string)
- `createdOn` (string:date-time)
- `frontOfficeURL` (string)
- `backOfficeURL` (string)

## BankChargeDto

- `id` (string): Identity
- `invoiceId` (string): saleInvoice Id
- `invoiceNumber` (string): Invoice number
- `date` (string:date-time)
- `effectiveDate` (string:date-time)
- `dateAsString` (string)
- `effectiveDateAsString` (string)
- `invoicePersonaDocument` (string): VATNumber Invoice Client
- `invoicePersonaName` (string): Name Invoice Client
- `amount` (number:double): Amount
- `amountAsString` (string): Amount
- `state` (integer): State Pending = 1 Charged = 2 Returned = 3
- `source` (string): Data Origin
- `bankStatementCorrelationId` (string): Bank Statement CorrelationId

## BankChargeDtoArray

Lista de `BankChargeDto`.

## BankDTO

- `id` (string): Identifier
- `code` (string): Code
- `description` (string): Description
- `iban` (string): Iban
- `swift` (string): SWIFT
- `isNational` (boolean): Is national account
- `presenterSuffix` (string): Presenter suffix
- `creditorSuffix` (string): Creditor suffix
- `accountCode` (string): Account code
- `accountId` (string): Account Id
- `legacyId` (integer)
- `isEnabled` (boolean): Gets a value indicating whether the bank is enabled.

## BankDTOArray

Lista de `BankDTO`.

## BankPaymentDto

- `id` (string): Identity
- `invoiceId` (string): purchaseInvoice Id
- `invoiceNumber` (string): Invoice number
- `date` (string:date-time)
- `dateAsString` (string)
- `effectiveDate` (string:date-time)
- `effectiveDateAsString` (string)
- `invoicePersonaDocument` (string): VATNumber Invoice Supplier
- `invoicePersonaName` (string): Name Invoice Client
- `amount` (number:double): Amount
- `amountAsString` (string): Amount
- `state` (integer): State Pending = 1 Charged = 2 Returned = 3
- `source` (string): Data Origin
- `bankStatementCorrelationId` (string): Bank Statement CorrelationId

## BankPaymentDtoArray

Lista de `BankPaymentDto`.

## ChargeDTO

- `id` (string): Identifier
- `date` (string:date-time): Date
- `chargeDate` (string:date-time): Charge Date
- `returnDate` (string:date-time): Return Date
- `invoiceDate` (string:date-time): Invoice Date
- `amount` (number:double): Amount
- `currency` (string): Currency
- `bankId` (string): Bank Id
- `payDocumentId` (string): Pay Document Id
- `payDocumentDescription` (string): Pay Document Description
- `payDocumentRemittable` (boolean): Pay Document Remitted
- `directDebitId` (string): Direct debit Id
- `state` (number:double): State
- `customerName` (string): Customer name
- `invoiceNumber` (string): Invoice number
- `directDebitBankAccount` (string): Direct debit account
- `directDebitDescription` (string): Direct debit description
- `directDebitSwift` (string): Direct debit Swift
- `directDebitIsNacional` (boolean): Direct debit is nacional
- `bankDescription` (string): Bank description
- `remitted` (boolean): Remitted
- `remittanceNumber` (string): Remittance Number
- `mandateType` (string): Mandate Type
- `mandateReference` (string): Mandate Type
- `bankStatementCorrelationId` (string): Bank statment Id
- `customerId` (string): Customer Id
- `invoiceId` (string): saleInvoice Id
- `remittanceId` (string): Remittance Id
- `isMigrated` (boolean): IsMigrated. Read only.
- `journala3InnuvaId` (string): Journal a3InnuvaId. Read only.
- `returnJournala3InnuvaId` (string): Return Journal a3InnuvaId. Read only.

## ChargeDTOArray

Lista de `ChargeDTO`.

## CircuitInfoDTO

- `lineId` (string): Id of the line
- `description` (string): Description
- `units` (number:double): Units
- `lineBase` (number:double): Price
- `situation` (integer): Situation Unknown = 0, Pending = 1, In circuit = 2, Partially in circuit = 3
- `cancelledUnits` (number:double): Cancelled units.
- `pendingUnits` (number:double): Pending units.
- `confirmedUnits` (number:double): Confirmed units.
- `deliveredUnits` (number:double): Delivered units.
- `billedUnits` (number:double): Billed units.

## CircuitInfoDTOArray

Lista de `CircuitInfoDTO`.

## CompanyDataDTO

- `personType` (string): Person Type
- `vatNumber` (string): Vat Number
- `companyName` (string): Company Name
- `name` (string): Name
- `surname` (string): Surname
- `businessName` (string): Business name
- `address` (string): Address
- `town` (string): Town
- `zipCode` (string): Zip code
- `provinceCode` (string): Province code
- `countryCode` (string): Country code
- `phone` (string): Phone
- `phone2` (string): Phone 2
- `mail` (string): e-Mail
- `web` (string): Web
- `emailCompanyActivated` (boolean): Email Company Activated
- `emailFromName` (string): Email From Name
- `emailReplyToAddress` (string): e-Mail reply to address
- `companyRegimen` (integer): Regimen
- `invoiceEmittedByThirdParty` (boolean): Las facturas están emitidas por un tercero (Sí/No)
- `thirdPartyVatNumberType` (integer): Tipo de documento del tercero None = 0, Cif = 1, Nif = 2, Nie = 3, NifIntracom = 4, Other = 5, Passport = 6, ResidenceCountryOfficialDocument = 7, TaxResidenceCertificate = 8
- `thirdPartyVatNumber` (string): VAT number del tercero
- `thirdPartyName` (string): Nombre del tercero
- `thirdPartyCountryCode` (string): Codigo del pais del tercero

## CompanyDto

- `id` (integer): Identifier
- `name` (string): Company name
- `idCDA` (string): CDA
- `default` (boolean): Default company
- `companyStatus` (string): Company status

## CompanyDtoArray

Lista de `CompanyDto`.

## CompanyLicensingDTO

- `licensingStatus` (integer): Licensing status None = 0, Activo = 1, Baja = 2, Try=3, FueraDeMantenimiento = 5, BajaEnTramite = 6
- `productType` (integer): None = 0, GoFromAdvisor = 1, GoDirectSale = 2, ProFromAdvisor = 3, ProDirectSale = 4, A3InnuvaAsesor = 5, A3InnuvaPyme = 6
- `id` (integer): Identifier
- `name` (string): Company name
- `idCDA` (string): CDA
- `default` (boolean): Default company
- `companyStatus` (string): Company status

## CompanyLicensingDTOArray

Lista de `CompanyLicensingDTO`.

## CompanySettingsAntifraudDTO

- `allowed` (boolean)
- `reason` (string)

## CompanySettingsDTO

- `activityId` (string): Activity id
- `saleOperationType` (string): Sale operation type
- `purchaseOperationType` (string): Purchase operation type
- `saleVatType` (string): Sale vat type
- `purchaseVatType` (string): Purchase vat type id
- `includedTax` (boolean): Included vat
- `irpfPercentage` (number:double): IRPF Percentage
- `irpfCode` (string): IRPF Code
- `bankId` (string): Bank id
- `paymentTypeId` (string): Payment type id
- `paymentMethodId` (string): Payment method id
- `saleFeeId` (string): Sale rate id
- `purchaseRateId` (string): Purchase rate id
- `quotaCharacter` (string): Quota character
- `saleInvoiceType` (string): Sale invoice type
- `saleOfferSerieId` (string): Sale offer serie id
- `saleOrderSerieId` (string): Sale order serie id
- `saleDeliveryNoteSerieId` (string): Sale delivery note serie id
- `saleInvoiceSerieId` (string): Sale invoice serie id
- `rectificationSaleInvoiceSerieId` (string): Rectification sale invoice serie id
- `purchaseInvoiceSerieId` (string): Purchase invoice serie id
- `rectificationPurchaseInvoiceSerieId` (string): Rectification purchase invoice serie id
- `purchaseDeliveryNoteSerieId` (string): Purchase delivery note serie id
- `purchaseOrderSerieId` (string): Purchase order serie id
- `decimalUnits` (integer): Decimals units
- `decimalPrices` (integer): Decimals prices
- `mercantileRegistry` (string): Mercantile registry
- `gdpr` (string): General Data Protection Regulation
- `saleOfferTemplateCode` (string): Sale Offer Template Code
- `saleOrderTemplateCode` (string): Sale Order Template Code
- `saleDeliveryNoteTemplateCode` (string): Sale Delivery Note Template Code
- `saleInvoiceTemplateCode` (string): Sale Invoice Template Code
- `currencyCode` (string): Currency code
- `allAffectStock` (boolean): All Affect Stock
- `defaultValuationInProduct` (string): Default valuation in product: StandartPrice = "PEST" CostPrice = "PCOS" LastPrice = "PCOM"
- `allowNegativeStock` (boolean): Allow Negative Stock
- `accountingPlanConfiguration` (integer): Accounting configuration plan
- `companyRegimen` (integer): Regimen
- `confidentiality` (boolean): Has confidentiality
- `defaultDeliveryLabelTemplateCode` (string)
- `warehouseCorrelationId` (string)
- `lowStockAlert` (boolean): Low stock alert: show warnings when stock goes below zero When AllowNegativeStock is set to false, this values sets automatically to false
- `batches` (boolean): Has Batches
- `expirationDates` (boolean): Has Expired Dates
- `allowExpiredDates` (boolean): Has Allow Expired Dates
- `serialNumbers` (boolean): Has Serial Numbers
- `allocatedCostsCriteria` (string): Indicates how the total allocated costs for a document are distributed among its affecting stock lines. By base amount = "B" By units : "U"
- `saleDiscountId` (string:uuid): Sale discount identifier
- `purchaseDiscountId` (string:uuid): Purchase discount identifier
- `validationAEAT` (boolean): AEAT validation setting
- `draftTemplateCode` (string): Draft template code (e.g., "DraftWord.00001")

## ComponentProductDto

- `productId` (string:uuid): Component existing product identifier
- `units` (number:double): Units. The value must be greater than 0

## ConfigurationValueDTO

- `key` (string): Key name
- `value` (object): Value

## ConfigurationValueDTOArray

Lista de `ConfigurationValueDTO`.

## ContactDTO

- `id` (string): Identifier
- `name` (string): Name
- `mail` (string): e-Mail
- `phone` (string): Phone
- `source` (string): Entity source
- `sourceId` (string): Source entity identifier

## CountryDTO

- `code` (string): Code
- `description` (string): Description
- `vatNumberCode` (string): Code to identify country from vat number

## CountryDTOArray

Lista de `CountryDTO`.

## CurrencyDTO

- `code` (string): Code
- `iso` (string): Iso code
- `iso3166` (string): Iso code 3166
- `description` (string): Description
- `symbol` (string): Currency symbol

## CurrencyDTOArray

Lista de `CurrencyDTO`.

## CustomPropertyDTO

- `propertyName` (string): PropertyName
- `propertyValue` (object): PropertyValue

## CustomSchemaDTO

- `name` (string): Dictionay name
- `description` (string): Dictionay description
- `applicationId` (integer): Application

## CustomSchemaDTOArray

Lista de `CustomSchemaDTO`.

## CustomerAddressDTO

- `street` (string): MainAddress
- `town` (string): Town
- `zipCode` (string): ZipCode
- `provinceCode` (string): Province code
- `provinceName` (string): Province name
- `countryCode` (string): Country code
- `localization` (string): Localization
- `phone` (string): Phone
- `mail` (string): e-Mail
- `mailCC` (string): e-Mail CC
- `carrierId` (string:uuid): Carrier Id
- `types` (integer[]): Address types Commercial = 1 Tax = 2 Default delivery = 3 Delivery = 4
- `correlationId` (string): GUID Correlation Id

## CustomerAddressDTOArray

Lista de `CustomerAddressDTO`.

## CustomerContactDTO

- `id` (string): Identifier
- `name` (string): Name
- `mail` (string): e-Mail
- `phone` (string): Phone
- `phone2` (string): Phone2

## CustomerContactDTOArray

Lista de `CustomerContactDTO`.

## CustomerDTO

- `id` (string): Identifier
- `creationDate` (string:date-time): Creation date. Read only.
- `enabled` (boolean): Indicates whether the customer is enabled.
- `vatNumber` (string): VAT number
- `vatNumberType` (integer): Vat number type None = 0, Cif = 1, Nif = 2, Nie = 3, NifIntracom = 4, Other = 5, Passport = 6, ResidenceCountryOfficialDocument = 7, TaxResidenceCertificate = 8
- `code` (string): Code
- `name` (string): TaxName
- `businessName` (string): Name
- `web` (string): Web
- `address` (AddressDTO)
- `phone` (string): Phone
- `mail` (string): e-Mail
- `mailCC` (string): e-Mail CC
- `isSameAddress` (boolean): Is same address
- `businessAddress` (AddressDTO)
- `businessPhone` (string): Business phone
- `businessMail` (string): Business e-Mail
- `businessMailCC` (string): Business e-Mail CC
- `annotations` (string): The annotations attribute.
- `rateId` (string): Rate identifier
- `discountId` (string:uuid): Discount identifier
- `discountPercentage` (number:double): Discount percentage attribute.
- `bankId` (string): Bank identifier
- `paymentTypeId` (string): Payment document id
- `paymentMethodId` (string): Payment method id
- `paymentDay1` (integer): Payment day 1 attribute.
- `paymentDay2` (integer): Payment day 2 attribute.
- `paymentDay3` (integer): Payment day 3 attribute.
- `operationType` (string): Operation type attribute.
- `taxType` (string): Tax type attribute.
- `taxIncluded` (boolean): Tax included attribute.
- `applyIRPF` (boolean): Apply IRPF attribute.
- `sendPdfByEmail` (boolean): Send PDF by email attribute.
- `directDebit` (DirectDebitDTO)
- `mandateType` (string): The mandate type attribute.
- `mandateReference` (string): The mandate reference attribute.
- `mandateSignatureDate` (string:date-time): The date of the signature attribute.
- `mandateDebType` (string): The deb type of the mandate attribute.
- `contact` (ContactDTO)
- `representativeId` (string): Representative identifier. The identifier of an existing Representative.
- `representativeName` (string): Representative name. The name of an existing Representative.
- `source` (string): Entity source
- `sourceId` (string): Source entity identifier
- `saleOfferTemplateId` (string): Sale Offer Template Code
- `saleOrderTemplateId` (string): Sale Order Template Code
- `saleDeliveryNoteTemplateId` (string): Sale Delivery Note Template Code
- `saleInvoiceTemplateId` (string): Sale Invoice Template Code
- `customProperties` (CustomPropertyDTO[]): Custom properties
- `accountCode` (string): Account code
- `accountId` (string): Account id
- `customerFaceData` (CustomerFaceDataDto)
- `transactionType` (integer): Transaction type inferred from the VAT number. Unknown = 0, NifOrNie = 1, B2BNational = 2, B2G = 3 , Intracommunity = 4, Export = 5
- `hasTermsAgreement` (boolean): Indicates whether the supplier has accepted the terms agreement. Only modifiable when the ElectronicBill feature is enabled.
- `hasExtendedPaymentTerm` (boolean): Indicates whether the supplier has an extended payment term. Only modifiable when the ElectronicBill feature is enabled.

## CustomerFaceDataDto

- `id` (string): Identifier
- `accountingOfficeCode` (string): Accounting Office Code
- `accountingOffice` (string): Accounting Office Description
- `organManagingCode` (string): Organ Managing Code
- `organManaging` (string): Organ Managing Description
- `processingUnitCode` (string): Processing Unit Code
- `processingUnit` (string): Processing Unit Description
- `proposingOrganCode` (string): Proposing Organ Code
- `proposingOrgan` (string): Proposing Organ Description

## DirectDebitDTO

- `id` (string): Identifier
- `name` (string): Name
- `account` (string): Direct Debit
- `isNational` (boolean): Is national
- `bicswift` (string): BIC/SWIFT
- `isDefault` (boolean): Is default
- `mandateType` (string): The mandate type
- `mandateReference` (string): The mandate reference
- `mandateSignatureDate` (string:date-time): The date of the signature
- `mandateDebType` (string): The deb type of the mandate First = "F" Recurring = "R"

## DirectDebitDTOArray

Lista de `DirectDebitDTO`.

## DocumentLineInfoDTO

- `id` (string): Id Document
- `documentType` (integer): Offer = 0, Order = 1, DeliveryNote = 3, Invoice = 4,
- `number` (string): Document number
- `units` (number:double): line units
- `date` (string:date-time): Creation document date
- `reference` (string): Document reference
- `lineId` (string): LineId Document

## DocumentLineInfoDTOArray

Lista de `DocumentLineInfoDTO`.

## DownloadinvoicePurchaseIdCDAIdGet200ApplicationOctet-streamResponse


## DownloadinvoiceSaleIdCDAIdGet200ApplicationOctet-streamResponse


## DraftDTO

- `id` (string)
- `date` (string:date-time)
- `type` (string)
- `user` (string)
- `processId` (string)
- `status` (string)
- `draftNumber` (integer:int64)
- `content` (string)
- `massiveProcessId` (string)
- `sourceType` (string)
- `documentNumber` (string)

## DraftDTOArray

Lista de `DraftDTO`.

## DueDTO

- `id` (string): Identifier
- `date` (string:date-time): Date
- `chargeDate` (string:date-time): Charge Date
- `returnDate` (string:date-time): Return Date
- `invoiceDate` (string:date-time): Invoice Date
- `amount` (number:double): Amount
- `currency` (string): Currency
- `bankId` (string): Bank Id
- `payDocumentId` (string): Pay Document Id
- `payDocumentDescription` (string): Pay Document Description
- `payDocumentRemittable` (boolean): Pay Document Remitted
- `directDebitId` (string): Direct debit Id
- `state` (number:double): State
- `customerName` (string): Customer name
- `customerDocument` (string): Customer document
- `supplierDocument` (string): Supplier document
- `invoiceNumber` (string): Invoice number
- `directDebitBankAccount` (string): Direct debit account
- `directDebitDescription` (string): Direct debit description
- `directDebitSwift` (string): Direct debit Swift
- `directDebitIsNacional` (boolean): Direct debit is nacional
- `customerTown` (string): Town
- `customerCountry` (string): Country
- `customerMainAddress` (string): Main address
- `customerPostalCode` (string): Postal code
- `bankDescription` (string): Bank description
- `remitted` (boolean): Remitted
- `remittanceNumber` (string): Remittance Number
- `mandateType` (string): Mandate Type
- `mandateReference` (string): Mandate Type
- `customerId` (string): Customer Id
- `invoiceId` (string): saleInvoice Id
- `purchaseInvoiceId` (string)
- `remittanceId` (string): Remittance Id
- `parentDueId` (string): ParentDue Id
- `bankStatementCorrelationId` (string): Bank statment Id
- `purchaseReference` (string): Reference
- `journala3InnuvaId` (string): Journal a3InnuvaId. Read only.
- `returnJournala3InnuvaId` (string): Return Journal a3InnuvaId. Read only.

## DueDTOArray

Lista de `DueDTO`.

## EInvoiceLogAnomalyDTO

- `correlationId` (string)
- `anomalyDate` (string:date-time)
- `anomaliesEventType` (integer)
- `description` (string)
- `eInvoiceLogId` (integer)

## EditableInfoElectronicInvoiceHeaderDTO

- `nif` (boolean)
- `name` (boolean)
- `country` (boolean)
- `selectExistingCustomer` (boolean)
- `invoiceDate` (boolean)
- `transactionDate` (boolean)
- `serie` (boolean)
- `activity` (boolean)
- `invoiceNumber` (boolean)
- `transactionType` (boolean)
- `invoiceType` (boolean)
- `taxIncluded` (boolean)
- `rate` (boolean)
- `baseAffect` (boolean)
- `condition` (boolean)
- `promptPayment` (boolean)
- `financialSurchage` (boolean)
- `retentionBase` (boolean)
- `retention` (boolean)
- `discount` (boolean)

## EditableInfoElectronicInvoiceLinesDTO

- `product` (boolean)
- `units` (boolean)
- `price` (boolean)
- `taxType` (boolean)
- `discount` (boolean)
- `warehouse` (boolean)

## ElectronicBillActivationDTO

- `vatNumber` (string): Vat Number
- `companyName` (string): Company Name
- `taxAdministration` (integer): Associated Tax Administration Araba = 1, Bizkaia = 2, Gipuzkoa = 3
- `activationDate` (string:date-time): TickateBAI activation date
- `invoiceTemplate` (string): Report template name for ticketbai invoices
- `epigraph` (string): TickateBAI Epigraph
- `lroeType` (integer): TickateBAI LROE Type
- `acceptTerms` (boolean): Accept terms
- `companyRegime` (integer): Regimen General = 1, Simplified = 2, Equivalence Surcharge = 3
- `confidentiality` (boolean): Has confidentiality
- `zipCode` (string): Company Name

## EntityDTO

- `name` (string): Entity name
- `description` (string): Entity description

## EntityDTOArray

Lista de `EntityDTO`.

## EpigraphDTO

- `id` (integer): Id
- `epigraphCode` (string): Invoice type description
- `ticketBaiCode` (string): DocumentNumber
- `descriptionES` (string): Customer name
- `descriptionEUS` (string): Log status description

## EpigraphDTOArray

Lista de `EpigraphDTO`.

## ExpenseTypeDTO

- `id` (string): Identifier
- `description` (string): Name
- `accountsGroupCode` (string): Accounts group code
- `accountCode` (string): Account code
- `accountId` (string): Account id
- `creditAccountCode` (string): Credit account code
- `creditAccountId` (string): Credit account id
- `isSystem` (boolean): Is system. Read only
- `legacyId` (integer)

## ExpenseTypeDTOArray

Lista de `ExpenseTypeDTO`.

## FeeDTO

- `id` (string): Identifier
- `productId` (string): Product identifier
- `description` (string): Description
- `price` (number:double): Price
- `discountPercentage` (number:double): Discount percentage
- `serieId` (string): Serie identifier
- `invoiceType` (string): Invoice type: 'B': Goods. 'S': Services. 'F': Real state. 'I': Real inversion
- `isIndependentInvoice` (boolean): Is Independent Invoice
- `taxTypeCode` (string): Tax Type Code
- `operationTypeCode` (string): Operation type identifier
- `incomeTypeId` (string): Income type identifier
- `taxBase` (number:double): Tax base
- `applyJanuary` (boolean): Apply January
- `applyFebruary` (boolean): Apply February
- `applyMarch` (boolean): Apply March
- `applyApril` (boolean): Apply April
- `applyMay` (boolean): Apply May
- `applyJune` (boolean): Apply June
- `applyJuly` (boolean): Apply July
- `applyAugust` (boolean): Apply August
- `applySeptember` (boolean): Apply September
- `applyOctober` (boolean): Apply October
- `applyNovember` (boolean): Apply November
- `applyDecember` (boolean): Apply December
- `lastEmission` (string:date-time): Last emission
- `lastEmissionState` (integer): Last emission state: '0': Not generated. '1': Invoice generated. '2': Invoice generated with modifications.
- `nextEmission` (string:date-time): Next emission
- `tags` (FeeTagDTO[]): Custom properties
- `activityId` (string): Activity identifier
- `lastEmissionIsDraft` (boolean): Last fee emission is draft
- `isObsolete` (boolean): Is obsolete

## FeeDTOArray

Lista de `FeeDTO`.

## FeePeriodLogDTO

- `period` (integer): Period
- `year` (integer): Year
- `tags` (FeeTagDTO[]): Tags
- `draftId` (integer): Draft identifier

## FeeTagDTO

- `id` (string): Identifier
- `tagId` (string): Identifier
- `description` (string): Description

## FlatActivityDTO

- `id` (string): Identifier
- `code` (string): Code
- `name` (string): Name
- `ecoCompany` (string): Código de empresa a3ASESOR|eco (5 posiciones numéricas y longitud fija)
- `ecoActivity` (string): Código de actividad a3ASESOR|eco. 2 posiciones numéricas Rango de valores: del 01-10
- `epigraphId` (integer): Epigraph id
- `epigraphCode` (string): Epigraph code. ReadOnly
- `epigraphDescription` (string): Epigraph description. ReadOnly
- `regimen` (integer): Regimen (1 - General, 2 - Simplificado, 3 - Recargo de equivalencia)
- `taxation` (integer): Tributación (1 - Estatal, 2 - Canarias)
- `description` (string): Descripción (aplica a a3InnuvaERP)
- `adhereToTicketBai` (boolean): AdhereToTicketBai for Canarian Taxation
- `isElectronicBillingExcluded` (boolean): Indicates whether the activity is excluded from electronic billing
- `isLAFTDisabled` (boolean): IsLAFTDisabled (default false), false = in RSIF, true = non RSIF
- `laftDisabledConfirmation` (boolean): Confirmation Disabled Antifraud, when IsLAFTDisabled is true should be true
- `antifraudNonComplianceReason` (integer): Reason why the activity is not compliant with the antifraud law None = 0, Acogido al SII = 1, Actividad fuera de España = 2, Solicitud de no aplicacion Art5 = 3
- `resignationCode` (string): Indicates Resignation Code

## FlatActivityDTOArray

Lista de `FlatActivityDTO`.

## FlatCustomerDTO

- `id` (string)
- `creationDate` (string:date-time)
- `vatNumber` (string)
- `vatNumberType` (integer)
- `code` (string)
- `name` (string)
- `businessName` (string)
- `web` (string)
- `street` (string)
- `zipCode` (string)
- `town` (string)
- `province` (string)
- `phone` (string)
- `mail` (string)
- `businessStreet` (string)
- `businessZipCode` (string)
- `businessTown` (string)
- `businessProvince` (string)
- `businessPhone` (string)
- `businessMail` (string)
- `accountCode` (string)
- `accountId` (string)
- `source` (string): Source
- `sourceId` (string): Source identifier
- `enabled` (boolean): Enabled
- `legacyId` (integer)
- `transactionType` (integer)
- `sendPdfByEmail` (integer)

## FlatCustomerDTOArray

Lista de `FlatCustomerDTO`.

## FlatProductDTO

- `id` (string): Identifier
- `code` (string): Code
- `description` (string): Description
- `incomeTypeDescription` (string): Income type Id
- `salePrice` (number:double): Sale price
- `saleCurrency` (string): Sale currency
- `purchaseTypeDescription` (string): Expense type Id
- `purchasePrice` (number:double): Purchase price
- `purchaseCurrency` (string): Purchase currency
- `creationDate` (string:date-time): Create date
- `affectsStock` (boolean): Affects stock
- `stockUnits` (number:double): Stock units. Read only
- `unitsInPackage` (number:double): Units in packages
- `packagesInBundle` (number:double): Packages in bundles
- `source` (string): Source
- `sourceId` (string): Source identifier
- `isKit` (boolean): Is kit
- `hasTraceability` (boolean): Has traceability
- `salesCriteria` (integer): Sales Criteria field determines whether product sales traceability is automatic or manual. Automatic = 0 Manual = 1 Default value is Automatic = 0
- `useDimensions` (boolean): Use Dimensions

## FlatProductDTOArray

Lista de `FlatProductDTO`.

## FlatPurchaseDeliveryNoteDTO

- `id` (string): Identifier
- `number` (string): Number
- `date` (string:date-time): Date
- `receptionDate` (string:date-time): Delivery Date.
- `reference` (string): Reference
- `supplierVATNumber` (string): Supplier VATNumber.
- `supplierName` (string): Supplier name
- `email` (string): Document email
- `taxBase` (number:double): Tax base
- `taxTotal` (number:double): Tax total
- `total` (number:double): Total
- `currency` (string): Currency
- `purchaseOperationTypeCode` (string): Purchase operation type code
- `purchaseOperationTypeDescription` (string): Purchase operation type description
- `situation` (string): Situation Active = "A" Partially Served = "P" Served = "S"
- `billable` (boolean): Billable
- `source` (string): Source
- `sourceId` (string): Source identifier
- `activityId` (string): Activity identifier
- `activityDescription` (string): Activity description

## FlatPurchaseDeliveryNoteDTOArray

Lista de `FlatPurchaseDeliveryNoteDTO`.

## FlatPurchaseDocumentDTO

- `id` (string): Identifier
- `documentType` (string): Document Type
- `purchaseKind` (integer): Purchase Kind Invoice = 0, Supply = 1
- `number` (string): Number
- `reference` (string): Reference
- `date` (string:date-time): Date
- `accountingDate` (string:date-time): Date
- `supplierId` (string): Supplier SupplierId.
- `supplierVATNumber` (string): VATNumber.
- `supplierName` (string): Name
- `email` (string): Document email
- `taxBase` (number:double): Tax base
- `taxTotal` (number:double): Tax total
- `withholdingTotal` (number:double): Withholding total
- `total` (number:double): Total
- `purchaseCurrency` (string): Purchase currency
- `purchaseOperationTypeCode` (string): Purchase operation type code
- `purchaseOperationTypeDescription` (string): Purchase operation type description
- `invoiceType` (string): Invoice type
- `situation` (integer): Situation
- `isInmediatePayment` (boolean): Is inmediate payment
- `isRectificative` (boolean): Is rectificative
- `rectifiedId` (string): rectified id
- `rectifiedDate` (string:date-time): rectified date
- `rectifiedNumber` (string): rectified number
- `isRectified` (boolean): Is rectified
- `rectificativeId` (string): rectificative id
- `rectificativeDate` (string:date-time): rectificative date
- `rectificativeNumber` (string): rectificative number
- `hasAttachment` (boolean): Has attachment
- `hasAttachmentToExport` (string): Has attachment to export
- `activityId` (string): Activity identifier
- `activityDescription` (string): Activity description
- `isMigrated` (boolean): IsMigrated. Read only.

## FlatPurchaseDocumentDTOArray

Lista de `FlatPurchaseDocumentDTO`.

## FlatPurchaseInvoiceDTO

- `id` (string): Identifier
- `number` (string): Number
- `date` (string:date-time): Date
- `accountingDate` (string:date-time): Date
- `reference` (string): Reference
- `supplierId` (string): Supplier SupplierId.
- `supplierVATNumber` (string): VATNumber.
- `supplierName` (string): Name
- `email` (string): Document email
- `taxBase` (number:double): Tax base
- `taxTotal` (number:double): Tax total
- `total` (number:double): Total
- `purchaseCurrency` (string): Purchase currency
- `purchaseOperationTypeCode` (string): Purchase operation type code
- `purchaseOperationTypeDescription` (string): Purchase operation type description
- `invoiceType` (string): Invoice type
- `situation` (integer): Situation
- `isRectificative` (boolean): Is rectificative
- `rectifiedId` (string): rectified id
- `rectifiedDate` (string:date-time): rectified date
- `rectifiedNumber` (string): rectified number
- `isRectified` (boolean): Is rectified
- `rectificativeId` (string): rectificative id
- `rectificativeDate` (string:date-time): rectificative date
- `rectificativeNumber` (string): rectificative number
- `source` (string): Source
- `sourceId` (string): Source identifier
- `isMigrated` (boolean): IsMigrated. Read only.

## FlatPurchaseInvoiceDTOArray

Lista de `FlatPurchaseInvoiceDTO`.

## FlatPurchaseOrderDTO

- `id` (string): Identifier
- `number` (string): Number
- `date` (string:date-time): Date
- `deliveryDate` (string:date-time): Delivery Date.
- `reference` (string): Reference
- `supplierVATNumber` (string): Supplier VATNumber.
- `supplierName` (string): Supplier name
- `email` (string): Document email
- `taxBase` (number:double): Tax base
- `taxTotal` (number:double): Tax total
- `total` (number:double): Total
- `currency` (string): Currency
- `purchaseOperationTypeCode` (string): Purchase operation type code
- `purchaseOperationTypeDescription` (string): Purchase operation type description
- `situation` (string): Situation Active = "A" Partially Served = "P" Served = "S"
- `source` (string): Source
- `sourceId` (string): Source identifier
- `activityId` (string): Activity identifier
- `activityDescription` (string): Activity description

## FlatPurchaseOrderDTOArray

Lista de `FlatPurchaseOrderDTO`.

## FlatRemittanceDTO

- `id` (string): Identifier.
- `bankId` (string): Bank Identifier.
- `date` (string:date-time): Data
- `mandateType` (string): MandateType
- `amount` (number:double): Amount
- `chargeAmount` (number:double): ChargeAmount.
- `chargeDate` (string:date-time): ChargeDate.
- `number` (string): Number.
- `annotations` (string): Annotations.
- `situation` (integer): Situation. Charged = 1 PartiallyCharged = 2 Pending = 3 ChargeTotal = 4
- `isFullyPaidAtOnce` (boolean): IsFullyPaidAtOnce.
- `currency` (string): Currency.
- `bankName` (string): BankAgencyName.
- `isMediaGenerated` (boolean): IsMediaGenerated.
- `isPaid` (boolean)
- `chargedDues` (integer)
- `returnedDues` (integer)
- `activityId` (string:uuid): Activity Id
- `isMigrated` (boolean): IsMigrated. Read only.
- `journala3InnuvaId` (string): Journal a3InnuvaId. Read only.

## FlatRemittanceDTOArray

Lista de `FlatRemittanceDTO`.

## FlatSaleDeliveryNoteDTO

- `id` (string): Identifier
- `number` (string): Number
- `date` (string:date-time): Date
- `receptionDate` (string:date-time): Delivery Date.
- `reference` (string): Reference
- `customerVATNumber` (string): Customer VATNumber.
- `customerName` (string): Customer name
- `email` (string): Document email
- `taxBase` (number:double): Tax base
- `taxTotal` (number:double): Tax total
- `total` (number:double): Total
- `saleCurrency` (string): Sale currency
- `saleOperationTypeCode` (string): Sale operation type code
- `saleOperationTypeDescription` (string): Sale operation type description
- `situation` (string): Situation Active = "A" Partially Served = "P" Served = "S"
- `billable` (boolean): Billable
- `source` (string): Source
- `sourceId` (string): Source identifier
- `activityId` (string): Activity identifier
- `activityDescription` (string): Activity description
- `processId` (string)
- `emailCC` (string)

## FlatSaleDeliveryNoteDTOArray

Lista de `FlatSaleDeliveryNoteDTO`.

## FlatSaleInvoiceDTO

- `id` (string): Identifier
- `number` (string): Number
- `date` (string:date-time): Date
- `accountingDate` (string:date-time)
- `transactionDate` (string:date-time)
- `reference` (string): Reference
- `customerId` (string): Customer CustomerId.
- `customerVATNumber` (string): Customer VATNumber.
- `customerName` (string): Customer name
- `email` (string): Document email
- `taxBase` (number:double): Tax base
- `totalTax` (number:double): Tax total
- `total` (number:double): Total
- `saleCurrency` (string): Sale currency
- `saleOperationTypeCode` (string): Sale operation type code
- `saleOperationTypeDescription` (string): Sale operation type description
- `invoiceType` (string): Invoice type
- `situation` (integer): Situation
- `isRectificative` (boolean): Is rectificative
- `rectificationType` (integer): Is rectificative
- `rectifiedId` (string): rectified id
- `rectifiedDate` (string:date-time): rectified date
- `rectifiedNumber` (string): rectified number
- `isRectified` (boolean): Is rectified
- `rectificativeId` (string): rectificative id
- `rectificativeDate` (string:date-time): rectificative date
- `rectificativeNumber` (string): rectificative number
- `antiFraudeLogStatus` (integer): Log status
- `aeatResponseCode` (string)
- `aeatResponseDescription` (string)
- `invoiceSent` (string:date-time)
- `sifNotApplyReason` (integer): Reason to not apply status BelongSii = 1, BelongTicketBai = 2, Exempt = 3, GeneratedByOtherSIF = 4 , Navarra = 5, FueraDeEspanya = 6, Other = 7 FueraAmbitoSubjetivoArticulo31 = 8
- `sifNotApplyDescriptionMessages` (string): Description to not apply status
- `ticketBAILogStatus` (integer): status of the request to TicketBAI PendingToSend = 1, ReceivedOk = 2, Rejected = 3, ReceivedWithWarnings = 4, Error = 5
- `ticketBAILogStatusDescription` (string): Log status description
- `electronicBillState` (integer): Electronic bill state. Sending: 1 = PendingSubmission 2 = WaitingResponse 3 = AcceptedWithErrors 4 = Accepted 5 = Rejected Sharing: 6 = AcceptedByRecipient 7 = RejectedByRecipient 8 = RecipientRejectionCancelled Payment: 9 = PaymentReported 10 = PaymentCancelled Collection: 11 = CollectionReported 12 = CollectionCancelled 13 = NonPaymentReported 14 = NonPaymentCancelled Not applicable: 15 = NotApplicable
- `source` (string): Source
- `sourceId` (string): Source identifier
- `activityId` (string): Activity identifier
- `activityDescription` (string): Activity description
- `isMigrated` (boolean): IsMigrated. Read only.
- `logDate` (string:date-time): Date of log saved

## FlatSaleInvoiceDTOArray

Lista de `FlatSaleInvoiceDTO`.

## FlatSaleOfferDTO

- `id` (string): Identifier
- `state` (string): States: Accepted = "AC" Pending = "PA" Rejected = "RE"
- `situation` (string): Situation
- `number` (string): Number
- `reference` (string): Reference
- `date` (string:date-time): Date.
- `expirationDate` (string:date-time): Expiration Date.
- `customerId` (string): Customer CustomerId.
- `customerVATNumber` (string): Customer VAT Number.
- `customerName` (string): Customer Name.
- `email` (string): Document email
- `totalTax` (number:double): Invoice total tax.
- `taxBase` (number:double): Offer tax base.
- `total` (number:double): Offer total.
- `saleCurrency` (string): Sale currency
- `saleOperationTypeCode` (string): Sale operation type code
- `saleOperationTypeDescription` (string): Sale operation type description
- `source` (string): Source
- `sourceId` (string): Source identifier
- `activityId` (string): Activity identifier
- `activityDescription` (string): Activity description
- `emailCC` (string)

## FlatSaleOfferDTOArray

Lista de `FlatSaleOfferDTO`.

## FlatSaleOrderDTO

- `id` (string): Identifier
- `number` (string): Number
- `date` (string:date-time): Date
- `deliveryDate` (string:date-time): Delivery Date.
- `reference` (string): Reference
- `customerVATNumber` (string): Customer VATNumber.
- `customerName` (string): Customer name
- `email` (string): Document email
- `taxBase` (number:double): Tax base
- `taxTotal` (number:double): Tax total
- `total` (number:double): Total
- `saleCurrency` (string): Sale currency
- `saleOperationTypeCode` (string): Sale operation type code
- `saleOperationTypeDescription` (string): Sale operation type description
- `situation` (string): Situation Active = "A" Partially Served = "P" Served = "S"
- `source` (string): Source
- `sourceId` (string): Source identifier
- `activityId` (string): Activity identifier
- `activityDescription` (string): Activity description
- `emailCC` (string)

## FlatSaleOrderDTOArray

Lista de `FlatSaleOrderDTO`.

## FlatSerieDTO

- `id` (string): Identifier
- `code` (string): Code
- `description` (string): Name
- `a3InnuvaActivityId` (string): A3InnuvaActivityId (Deprecated)
- `a3InnuvaActivityShortDescription` (string): A3InnuvaActivityShortDescription (Deprecated)
- `isLAFTDisabled` (boolean): IsLAFTDisabled (default false), false = in RSIF, true = non RSIF
- `laftDisabledConfirmation` (boolean): Confirmation Disabled Antifraud, when IsLAFTDisabled is true should by true

## FlatSerieDTOArray

Lista de `FlatSerieDTO`.

## FlatSupplierDTO

- `id` (string)
- `creationDate` (string:date-time)
- `vatNumber` (string)
- `vatNumberType` (integer)
- `code` (string)
- `name` (string)
- `businessName` (string)
- `web` (string)
- `street` (string)
- `zipCode` (string)
- `town` (string)
- `province` (string)
- `phone` (string)
- `mail` (string)
- `businessStreet` (string)
- `businessZipCode` (string)
- `businessTown` (string)
- `businessProvince` (string)
- `businessPhone` (string)
- `businessMail` (string)
- `accountCode` (string)
- `accountId` (string)
- `source` (string): Source
- `sourceId` (string): Source identifier
- `enabled` (boolean): Enabled attribute.
- `legacyId` (integer)

## FlatSupplierDTOArray

Lista de `FlatSupplierDTO`.

## FlatSupplyInvoiceDTO

- `id` (string): Identifier
- `number` (string): Number
- `date` (string:date-time): Date
- `accountingDate` (string:date-time): Date
- `reference` (string): Reference
- `supplierId` (string): Supplier SupplierId.
- `supplierVATNumber` (string): VATNumber.
- `supplierName` (string): Name
- `email` (string): Document email
- `taxBase` (number:double): Tax base
- `taxTotal` (number:double): Tax total
- `total` (number:double): Total
- `purchaseCurrency` (string): Purchase currency
- `purchaseOperationTypeCode` (string): Purchase operation type code
- `purchaseOperationTypeDescription` (string): Purchase operation type description
- `invoiceType` (string): Invoice type
- `situation` (integer): Situation
- `isRectificative` (boolean): Is rectificative
- `rectifiedId` (string): rectified id
- `rectifiedDate` (string:date-time): rectified date
- `rectifiedNumber` (string): rectified number
- `isRectified` (boolean): Is rectified
- `rectificativeId` (string): rectificative id
- `rectificativeDate` (string:date-time): rectificative date
- `rectificativeNumber` (string): rectificative number
- `source` (string): Source
- `sourceId` (string): Source identifier
- `isMigrated` (boolean): IsMigrated. Read only.

## FlatSupplyInvoiceDTOArray

Lista de `FlatSupplyInvoiceDTO`.

## FlatTicketDTO

- `id` (string): Identifier
- `number` (string): Number
- `date` (string:date-time): Date
- `amount` (number:double): Ticket total
- `annotations` (string): Annotations
- `bankId` (string): Bank identifier
- `currencyCode` (string): Cuurrency
- `expenseTypeDescription` (string): Expense type description
- `bankName` (string): Bank name
- `documentNumber` (string): Document number.
- `expenseTypeId` (string)
- `source` (string): Source
- `sourceId` (string): Source identifier
- `activityId` (string): Activity identifier
- `activityDescription` (string): Activity description
- `isMigrated` (boolean): IsMigrated. Read only.

## FlatTicketDTOArray

Lista de `FlatTicketDTO`.

## ImportTaxLineDto

- `base` (number:double): Base.
- `taxType` (string): TaxType.
- `percentage` (number:double): Percentage. Read only
- `total` (number:double): Total.

## IncomeTypeDTO

- `id` (string): Identifier
- `description` (string): Name
- `accountsGroupCode` (string): Accounts group code
- `accountCode` (string): Account code
- `accountId` (string): Account id
- `creditAccountCode` (string): Credit account code
- `creditAccountId` (string): Credit account id
- `isSystem` (boolean): Is system. Read only
- `legacyId` (integer)

## IncomeTypeDTOArray

Lista de `IncomeTypeDTO`.

## InventoryDTO

- `id` (string): Identifier
- `date` (string:date-time): Date
- `reason` (string): Reason
- `warehouseCorrelationId` (string:uuid)

## InventoryDTOArray

Lista de `InventoryDTO`.

## InventoryDtoWithWarehouse

- `warehouseCode` (string)
- `warehouseDescription` (string)
- `isEditable` (boolean)
- `id` (string): Identifier
- `date` (string:date-time): Date
- `reason` (string): Reason
- `warehouseCorrelationId` (string:uuid)

## InventoryLineDto

- `correlationId` (string:uuid)
- `productId` (integer)
- `productCorrelationId` (string:uuid)
- `productCode` (string)
- `productDescription` (string)
- `stockUnits` (number:double)
- `stockUnitsCalculated` (number:double)
- `traceabilityDetails` (TraceabilityDetailDto[])

## InventoryLineDtoArray

Lista de `InventoryLineDto`.

## InvoiceChargeDTO

- `amount` (number:double)
- `paymentTypeId` (string)
- `bankId` (string)

## KitProductBehavioursDto

- `useKitIncomeTypes` (boolean): Usage behavior for income type. - False: maintains entry type of each component - True: propagates input type of kit line to each component
- `calculateComponentsUnitsByKitUnits` (boolean): Behaviour for unit calculation. Default false - False: holds the units of each component - True: multiplies units of each component by kit units
- `calculateKitPrice` (boolean): Behavior used to calculate price. Default false. - False: uses sum of component prices to calculate kit line price - True: use kit line price to calculate proportional component prices. The price distribution is based on a weighted formula, giving more proportional weight to the component whose gross base (price multiplied by units) is higher, and so on with the rest of the components.
- `calculateKitDiscount` (boolean): Behavior used to calculate discount. Default false. - False: calculate the kit weighted discount and set to kit discount - True: propagates kit line discount to each component discount

## KitProductConfigurationDto

- `useKitIncomeType` (boolean): Behavior used for income type. By default <strong>True</strong> - False: if you want to get income type of components, kit income type will be ignored - True: if you want to get income type of kit, components income types will be ignored
- `useKitPrice` (boolean): Behavior used to calculate prices. By default <strong>True</strong> - False: if you want to get price of components, kit price will be ignored - True: if you want to get price of kit, components prices will be ignored
- `components` (ComponentProductDto[]): Kit component products

## LicenseDTO

- `licenses` (integer)
- `state` (integer)
- `gamma` (integer)
- `endDate` (string:date-time)

## LoginResponse

- `token` (string): Token
- `refreshToken` (string): Refresh token
- `mail` (string): User's e-mail
- `locale` (string): User's language
- `name` (string): User's name
- `id` (integer): Identifier
- `version` (string): Application version
- `isAdvisor` (boolean): Is advisor
- `companies` (CompanyDto[])

## Message

- `type` (string): type
- `description` (string): description
- `code` (string): Code
- `title` (string): Title
- `details` (string): Details

## MigrationMonitoringDto

- `description` (string)
- `current` (string)
- `total` (string)
- `state` (integer)

## MigrationMonitoringDtoArray

Lista de `MigrationMonitoringDto`.

## ModuleTokenDTO

- `application` (ApplicationDTO)
- `idcda` (string)
- `companyName` (string)
- `createdOn` (string:date-time)
- `frontOfficeURL` (string)
- `backOfficeURL` (string)
- `price` (number:double)
- `state` (integer)
- `changeStateInfo` (string)
- `credentials` (string)

## OrganizationDTO

- `id` (string): Identifier
- `name` (string): Name
- `vatNumber` (string): VAT Number
- `phone` (string): Tax Phone
- `mail` (string): Tax e-Mail
- `street` (string): Tax street
- `town` (string): Tax Town
- `zipCode` (string): Tax ZipCode
- `provinceCode` (string): Tax Province code
- `countryCode` (string): Tax Country code
- `vatNumberType` (integer): Vat number type None = 0, Cif = 1, Nif = 2, Nie = 3, NifIntracom = 4, Other = 5, Passport = 6, ResidenceCountryOfficialDocument = 7, TaxResidenceCertificate = 8
- `addressCorrelationId` (string): Read Only Tax address correlation Id

## OrganizationDTOArray

Lista de `OrganizationDTO`.

## PaymentDTO

- `id` (string): Identifier
- `date` (string:date-time): Date
- `payDate` (string:date-time): Charge Date
- `invoiceDate` (string:date-time): Invoice Date
- `amount` (number:double): Amount
- `currency` (string): Currency
- `bankId` (string): Bank Id
- `payDocumentId` (string): Pay Document Id
- `payDocumentDescription` (string): Pay Document Description
- `directDebitId` (string): Direct debit Id
- `state` (number:double): State
- `supplierName` (string): Supplier name
- `invoiceNumber` (string): Invoice number
- `supplierInvoiceNumber` (string): Supplier invoice number
- `directDebitBankAccount` (string): Direct debit account
- `directDebitDescription` (string): Direct debit description
- `directDebitSwift` (string): Direct debit Swift
- `directDebitIsNacional` (boolean): Direct debit is nacional
- `bankDescription` (string): Bank description
- `supplierId` (string): Supplier Id
- `invoiceId` (string): Puchase Invoice Id
- `isInmediatePayment` (boolean): Puchase Invoice is inmediate Payment
- `isMigrated` (boolean): IsMigrated. Read only.
- `journala3InnuvaId` (string): Journal a3InnuvaId. Read only.
- `returnJournala3InnuvaId` (string): Return Journal a3InnuvaId. Read only.
- `bankStatementCorrelationId` (string)

## PaymentDTOArray

Lista de `PaymentDTO`.

## PaymentMethodDTO

- `id` (string): Identifier
- `code` (string): Code
- `description` (string): Name
- `promptPaymentDiscountPercentage` (number:double): Prompt payment discount percentage Value must be between 0.00 and 100.00.
- `financialChargePercentage` (number:double): Financial charge percentage Value must be between 0.00 and 100.00.
- `numberOfDues` (integer): Number of dues. Value must be between 1 and 10.
- `firstPeriod` (integer): First period. Value must be between 0 and 365.
- `nextPeriod` (integer): Next period. Value must be between 0 and 365.
- `calculationMethod` (integer): Calculation method
- `automaticPayment` (boolean): Charge or pay automatically on create invoice process

## PaymentMethodDTOArray

Lista de `PaymentMethodDTO`.

## PaymentTypeDTO

- `id` (string): Identifier
- `code` (string): Code
- `description` (string): Name
- `remittable` (boolean): Can be included in a remittance

## PaymentTypeDTOArray

Lista de `PaymentTypeDTO`.

## PeriodFeeDTO

- `customerName` (string): Customer identifier
- `feeTags` (string[]): Fee Tags
- `id` (string): Identifier
- `productId` (string): Product identifier
- `description` (string): Description
- `price` (number:double): Price
- `discountPercentage` (number:double): Discount percentage
- `serieId` (string): Serie identifier
- `invoiceType` (string): Invoice type: 'B': Goods. 'S': Services. 'F': Real state. 'I': Real inversion
- `isIndependentInvoice` (boolean): Is Independent Invoice
- `taxTypeCode` (string): Tax Type Code
- `operationTypeCode` (string): Operation type identifier
- `incomeTypeId` (string): Income type identifier
- `taxBase` (number:double): Tax base
- `applyJanuary` (boolean): Apply January
- `applyFebruary` (boolean): Apply February
- `applyMarch` (boolean): Apply March
- `applyApril` (boolean): Apply April
- `applyMay` (boolean): Apply May
- `applyJune` (boolean): Apply June
- `applyJuly` (boolean): Apply July
- `applyAugust` (boolean): Apply August
- `applySeptember` (boolean): Apply September
- `applyOctober` (boolean): Apply October
- `applyNovember` (boolean): Apply November
- `applyDecember` (boolean): Apply December
- `lastEmission` (string:date-time): Last emission
- `lastEmissionState` (integer): Last emission state: '0': Not generated. '1': Invoice generated. '2': Invoice generated with modifications.
- `nextEmission` (string:date-time): Next emission
- `tags` (FeeTagDTO[]): Custom properties
- `activityId` (string): Activity identifier
- `lastEmissionIsDraft` (boolean): Last fee emission is draft
- `isObsolete` (boolean): Is obsolete

## PeriodFeeDTOArray

Lista de `PeriodFeeDTO`.

## ProcessLogDTO

- `processId` (string:uuid)
- `correlationId` (string)
- `id` (string)
- `tenantId` (string)
- `processType` (integer)
- `processStatus` (integer)
- `createdDate` (string:date-time)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `result` (ProcessResultDTO[])
- `processName` (string)
- `params` (string)
- `userName` (string)
- `parentId` (string:uuid)
- `processDescriptions` (object)

## ProcessLogFlatDTO

- `processId` (string:uuid)
- `id` (string)
- `tenantId` (string)
- `processType` (integer)
- `processStatus` (integer)
- `createdDate` (string:date-time)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `processName` (string)
- `params` (string)
- `userName` (string)
- `parentId` (string:uuid)
- `processTypeDescription` (string)
- `processStatusDescription` (string)

## ProcessLogFlatDTOArray

Lista de `ProcessLogFlatDTO`.

## ProcessResultDTO

- `errorCode` (string)
- `errorMessage` (string)

## ProcessResultDTOArray

Lista de `ProcessResultDTO`.

## ProductDTO

- `id` (string): Identifier
- `code` (string): Code
- `description` (string): Description. If the product is a variant, this field will be read-only
- `alternativeProductId` (string): Alternative product code
- `supplierId` (string): Supplier id
- `supplierReference` (string): Alternative product code
- `isSale` (boolean): Is sale
- `incomeTypeId` (string): Income type Id
- `saleTaxCode` (string): Sale tax code. The SaleTaxCode field will be ignored if the product is a kit
- `isPurchase` (boolean): Is purchase
- `expenseTypeId` (string): Expense type Id
- `purchaseTaxCode` (string): Purchase tax code. The PurchaseTaxCode field will be ignored if the product is a kit
- `blocked` (boolean): Blocked
- `blockedReason` (string): Blocked reason
- `affectsStock` (boolean): Affects stock. Will always be false if UseDimensions is true
- `stockUnits` (number:double): Stock units. Read only
- `unitsInPackage` (number:double): Units in package
- `packagesInBundle` (integer): Packages in bundle
- `standardPrice` (number:double): Standard price
- `lastPurchaseDate` (string:date-time): Last purchase date. Read only
- `lastUnitPurchasePrice` (number:double): Last purchase price. Read only
- `lastPurchaseDiscount` (number:double): Last purchase discount. Read only
- `lastNetPurchasePrice` (number:double): Last net purchase price. Read only
- `criteriaValuation` (string): Default criteria valuation: StandartPrice = "PEST" CostPrice = "PCOS" LastPrice = "PCOM" AccordingOptions = "OPTN" PMP = "PMP"
- `unitValuation` (number:double): Unit valuation. Read only
- `stockValuation` (number:double): Stock valuation. Read only
- `salePrice` (number:double): Sale price
- `saleCurrency` (string): Sale currency. Read only
- `purchasePrice` (number:double): Purchase price
- `purchaseCurrency` (string): Purchase currency. Read only
- `annotations` (string): Annotations
- `creationDate` (string:date-time): Creation date. Read only
- `source` (string): Entity source
- `sourceId` (string): Source entity identifier
- `customProperties` (CustomPropertyDTO[]): Custom properties
- `confidentiality` (boolean): Confidentiality. Default false. Not applies if is kit
- `isKit` (boolean): Is Kit. Read only
- `excludedEquivalenceSurcharge` (boolean): Is excluded of equivalence surcharge
- `batches` (boolean): Indicates if batches are used in traceability. Default value is false
- `expirationDates` (boolean): Indicates if expired dates are used in traceability. Default value is false
- `allowExpiredDates` (boolean): Indicates if expired dates are allowed in traceability. Default value is false
- `expiredFormat` (integer): Specifies the format for expired dates used in traceability. Possible values: dd_mm_aaaa = 0, dd_mm_aa = 1, mm_aaaa = 2, mm_aa = 3, BeforeEndOf_aaaa = 4 Default value is dd_mm_aaaa = 0
- `serialNumbers` (boolean): Indicates if serial numbers are used in traceability. Default value is false
- `salesCriteria` (integer): Sales Criteria field determines whether product sales traceability is automatic or manual. Automatic = 0 Manual = 1 Default value is Automatic = 0
- `useDimensions` (boolean): Use Dimensions. Read only
- `variantsAffectStock` (boolean): Variant inherits properties from the parent product Determines whether the product variants affects stock. Only used when UseDimensions is true. Cannot be modified once the variants have been created
- `parentProductId` (string:uuid): Identifier of the parent product. Read only
- `isInheritingFromParent` (boolean): Variant configuration details for the product, including parent relationship and inheritance settings

## ProductInfoDto

- `canShowAntifraudeInvoiceStatus` (boolean): true: display column with state of registry associated to invoice false: do not display
- `idCDA` (string): IdCDA
- `description` (string): Description
- `userPersona` (integer): User Persona None = 0, Administrator = 1, Guest = 2, Advisor = 3,
- `type` (integer): Product Type None = 0, GoFromAdvisor = 1, GoDirectSale = 2, ProFromAdvisor = 3, ProDirectSale = 4
- `productTypePlan` (string): Product Type Plan code (e.g. "01" A3Factura, "EC" Collaborative ERP)
- `licensingStatus` (integer): Licensing Status None = 0, Activo = 1, Baja = 2, Try=3, FueraDeMantenimiento = 5
- `status` (string): Product status
- `isLinked` (boolean): IsLinked
- `additionalUsers` (integer): Additional users
- `tryDays` (integer): Try days
- `hasAdvisorInvitation` (boolean): Return if the company has an advisor invitation
- `features` (string[]): Feature list
- `applicationsInfoDto` (ApplicationInfoDto[]): List of aplication with their own information
- `softwareVersion` (string): Software version
- `isActiveInTicketBai` (boolean): Return if the company is active in ticketbai
- `ticketBaiErrors` (integer): Number of errors in ticketbai tracking
- `isActiveLeyAntifraude` (boolean)
- `isSuiteInitialSynchronization` (boolean): Return if the company is synchronization with innuva
- `isActiveVeriFactu` (boolean)
- `realFakeCompanyType` (integer): Return if the company a real company, a dummy one for testing, or if the company type is unknown
- `migrationStatus` (integer): Return if the company is migrating data
- `innuvaTenantId` (string): Innuva Tenant when suite version
- `innuvaPartitionClientId` (string): Innuva LegalEntityId when suite version
- `migrationScenario` (integer): Migration scenario
- `isAntifraudWizardShown` (boolean): Whether to display wizard to configure LATF
- `isNotNowButtonEnabled` (boolean): Wheter to display NowNow button in LATF wizard
- `hasLaftAlertCancellation` (boolean): Whether to display alert LATF
- `hasLaftAlertSumbission` (boolean): Whether to display alert LATF
- `hasLaftAlertEvent` (boolean): Whether to display alert LATF
- `latfProvisionalDate` (string:date-time)
- `hasLaftIsProvisional` (boolean)
- `provisionalAlreadyBeenUse` (boolean)
- `oldWizardConfiguration` (boolean)
- `latfConfiguredWithDigitalCertificate` (boolean)
- `isAntifraudLawConfigured` (boolean): Gets or sets a value indicating whether the Anti-fraud Law is configured.
- `latfDeadlineDateOldLegalEntities` (string:date-time): Gets or sets the LATF deadline for old legal entities who are not yet configured. Temporary property to be removed after the date configured: [System].[Configuration]: LATFDeadline2 - 01/01/2026.
- `latfDeadlineDateOldNaturalPersons` (string:date-time): Gets or sets the LATF deadline for old natural entities who are not yet configured. Temporary property to be removed after the date configured: [System].[Configuration]: LATFDeadline3 - 01/07/2026.
- `creationDateCompany` (string:date-time)
- `motiveNotUseProvisional` (integer): Get the motive to be out of antifraud law when a provisional authorization representation document has been submitted
- `isAntifraudForcedToConfigure` (boolean): Whether the antifraud configuration is forced for this tenant
- `latfForcedWithinDeadline` (boolean): Whether the tenant has a forced antifraud configuration with a deadline greater than the current UTC datetime

## PropertyDTO

- `propertyName` (string): Property name
- `type` (integer): Property type Bool = 1 Date = 2 Decimal = 3 Text = 4 Combo = 5, ValueSet = 6
- `values` (string): Values
- `defaultValue` (string): Default value
- `isSystem` (boolean): Is system
- `label` (string): Label

## PropertyDTOArray

Lista de `PropertyDTO`.

## ProvinceDTO

- `code` (string): Code
- `description` (string): Description

## ProvinceDTOArray

Lista de `ProvinceDTO`.

## PurchaseDeliveryNoteDTO

- `id` (string): Identifier
- `date` (string:date-time): Date. If null, system date is used.
- `receptionDate` (string:date-time): Reception date. If null, system date is used.
- `supplierId` (string): Supplier identifier. The identifier of an existing Supplier.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber. Read only.
- `reference` (string): Reference
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in supplier. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in supplier. Other values = An existing payment type of the company.
- `vatNumber` (string): Vat number
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `operationTypeCode` (string): Sale operation type code
- `isTaxIncluded` (boolean): Is tax included in the order
- `isTaxBaseAffected` (boolean): Is tax base affected in the order
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `annotations` (string): Annotations
- `taxBase` (number:double): Delivery note tax base. Read only.
- `totalTax` (number:double): Delivery note total tax. Read only.
- `total` (number:double): Delivery note total. Read only.
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `version` (string): Document version. Read only
- `lines` (PurchaseDeliveryNoteLineDto[]): Lines
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `billable` (boolean): Billable
- `situation` (string): Situation. Read only
- `totalPromptPayment` (number:double): Total prompt payment
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `currency` (string): Currency. Read only
- `taxRetentionPercentage` (number:double): Tax retention percentage
- `taxRetentionBase` (number:double): Tax retention base
- `totalRetention` (number:double): Delivery note total retention. Read only
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `rateId` (string:uuid): nullable: true Purchase Rate Identifier. Non-mandatory field. Required when Purchase Rates functionality is enabled in the company.
- `discountId` (string:uuid): Purchase Discount identifier. Null = No discount applied. Other values = An existing discount of the company.

## PurchaseDeliveryNoteLineDto

- `id` (string): Id
- `description` (string): Description
- `units` (number:double): Units. Default value is 1.
- `servedUnits` (number:double): Served units. Read only
- `cancelledUnits` (number:double): Cancelled units. Read only
- `price` (number:double): Price. Default value is 0.
- `discountRate1` (number:double): Discount rate. Default value is the client discount.
- `productId` (string): Id Product. Default value is null
- `productCode` (string): Product code. Only for display purposes. Read only.
- `taxTypeCode` (string): Tax type code
- `taxRate` (number:double): Tax rate. Read only.
- `taxSurchargeRate` (number:double): Tax surcharge
- `isExpense` (boolean): Expenses paid on behalf of the client?
- `taxBase` (number:double): Tax base. Read only.
- `annotations` (string): Annotations
- `expenseTypeId` (string): Id Expense type. Default value is null
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `situation` (string): Situation. Read only A = Active S = Served
- `sourceDocument` (DocumentLineInfoDTO)
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `traceabilityDetails` (TraceabilityDetailDto[]): This collection contains the specific traceability information for the product in the invoice line. It is mandatory to inform whether the product has traceability, and the sum of the quantities of these details must be equal to the number of units in the line.
- `priceOrigin` (string): Price origin: None, Rate, Product, Manual
- `discountOrigin` (string): Discount origin: None, Discount, Supplier, Manual
- `supplierProductReferenceCode` (string)
- `supplierProductReferenceDescription` (string)

## PurchaseDocumentDTO

- `id` (string): Identifier.
- `documentType` (integer): Source entity kind Invoice = 0, Supply = 1
- `date` (string:date-time): Date. If null, system date is used.
- `accountingDate` (string:date-time): Date. If null, system date is used.
- `supplierId` (string): Supplier identifier.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber
- `reference` (string): Reference.
- `bankId` (string): Bank identifier. Null = Default bank selected in supplier. Other values = An existing bank of the company.
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in supplier. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in supplier. Other values = An existing payment type of the company.
- `vatNumber` (string): Vat number
- `vatNumberType` (integer): Vat number type None = 0, Cif = 1, Nif = 2, Nie = 3, NifIntracom = 4, Other = 5, Passport = 6, ResidenceCountryOfficialDocument = 7, TaxResidenceCertificate = 8
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `directDebitId` (string): Direct debit identifier.
- `operationTypeCode` (string): Purchase operation type code
- `invoiceType` (string): Invoice type Common services = "S" Common goods = "C" Investments = "I"
- `isRent` (boolean): Is rent invoice
- `isTaxIncluded` (boolean): Is tax included in the invoice
- `isTaxBaseAffected` (boolean): Is tax base affected in the invoice
- `totalPromptPayment` (number:double): Total prompt payment
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `taxRetentionBase` (number:double): Tax retention base
- `withholdingPercentage` (number:double): Withholding percentage
- `withholdingModel` (string): Withholding model Model 111 = "110" Model 115/180 = "115" Model 123 = "123" Other models = "OTR"
- `withholdingKeyId` (integer): Withholding key id
- `withholdingSubKeyId` (integer): Withholding subkey id
- `annotations` (string): Annotations
- `taxBase` (number:double): Invoice tax base. Read only.
- `totalTax` (number:double): Invoice total tax. Read only.
- `totalRetention` (number:double): Invoice total retention.
- `total` (number:double): Invoice total. Read only.
- `purchaseCurrency` (string): Purchase currency. Read only.
- `situation` (integer): Situation
- `source` (string): Entity source
- `sourceId` (string): Source entity identifier
- `version` (string): Document version. Read only.
- `isInmediatePayment` (boolean): Is inmediate payment
- `hasAttachment` (boolean): Has attachment
- `isRectificative` (boolean): Is rectificative. Read only.
- `rectifiedId` (string): rectified id
- `rectifiedDate` (string:date-time): rectified date. Read only.
- `rectifiedNumber` (string): rectified number. Read only.
- `isRectified` (boolean): Is rectified. Read only.
- `rectificativeId` (string): rectificative id. Read only.
- `rectificativeDate` (string:date-time): rectificative date. Read only.
- `rectificativeNumber` (string): rectificative number. Read only.
- `deductionDate` (string:date-time): Deduction date.
- `duaNumber` (string): Dua Number.
- `importSupplierId` (string): Import supplier identifier.
- `importTaxLines` (ImportTaxLineDto[]): Import Tax Lines.
- `lines` (PurchaseInvoiceLineDTO[]): Lines.
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `siiData` (PurchaseInvoiceSiiDataDto)
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `isMigrated` (boolean): IsMigrated. Read only.
- `hasPendingCostAllocationProcesses` (boolean): Indicates if there are pending cost allocation processes for this invoice. This counter shows whether additional costs are currently being calculated. Read only.
- `allocatedCostsDistributionCriteria` (string): Criteria used for the distribution of allocated costs. Read only.
- `rateId` (string:uuid): nullable: true Purchase Rate Identifier. Non-mandatory field. Required when Purchase Rates functionality is enabled in the company.
- `discountId` (string:uuid): Purchase Discount identifier. Null = No discount applied. Other values = An existing discount of the company.

## PurchaseInvoiceDTO

- `id` (string): Identifier.
- `date` (string:date-time): Date. If null, system date is used.
- `accountingDate` (string:date-time): Date. If null, system date is used.
- `supplierId` (string): Supplier identifier.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber. Read only.
- `reference` (string): Reference.
- `bankId` (string): Bank identifier. Null = Default bank selected in supplier. Other values = An existing bank of the company.
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in supplier. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in supplier. Other values = An existing payment type of the company.
- `vatNumber` (string): Vat number
- `vatNumberType` (integer): Vat number type None = 0, Cif = 1, Nif = 2, Nie = 3, NifIntracom = 4, Other = 5, Passport = 6, ResidenceCountryOfficialDocument = 7, TaxResidenceCertificate = 8
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `directDebitId` (string): Direct debit identifier.
- `operationTypeCode` (string): Purchase operation type code
- `invoiceType` (string): Invoice type Common services = "S" Common goods = "C" Investments = "I"
- `isRent` (boolean): Is rent invoice
- `isTaxIncluded` (boolean): Is tax included in the invoice
- `isTaxBaseAffected` (boolean): Is tax base affected in the invoice
- `totalPromptPayment` (number:double): Total prompt payment
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `taxRetentionBase` (number:double): Tax retention base
- `withholdingPercentage` (number:double): Withholding percentage
- `withholdingModel` (string): Withholding model Model 111 = "110" Model 115/180 = "115" Model 123 = "123" Other models = "OTR"
- `withholdingKeyId` (integer): Withholding key id
- `withholdingSubKeyId` (integer): Withholding subkey id
- `annotations` (string): Annotations
- `taxBase` (number:double): Invoice tax base. Read only.
- `totalTax` (number:double): Invoice total tax. Read only.
- `totalRetention` (number:double): Invoice total retention.
- `total` (number:double): Invoice total. Read only.
- `purchaseCurrency` (string): Purchase currency. Read only.
- `situation` (integer): Situation. Read only.
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `version` (string): Document version. Read only.
- `isRectificative` (boolean): Is rectificative. Read only.
- `rectifiedId` (string): rectified id. Read only.
- `rectifiedDate` (string:date-time): rectified date. Read only.
- `rectifiedNumber` (string): rectified number. Read only.
- `isRectified` (boolean): Is rectified. Read only.
- `rectificativeId` (string): rectificative id. Read only.
- `rectificativeDate` (string:date-time): rectificative date. Read only.
- `rectificativeNumber` (string): rectificative number. Read only.
- `deductionDate` (string:date-time): Deduction date.
- `duaNumber` (string): Dua Number.
- `importSupplierId` (string): Import supplier identifier.
- `importTaxLines` (ImportTaxLineDto[]): Import Tax Lines.
- `lines` (PurchaseInvoiceLineDTO[]): Lines.
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `siiData` (PurchaseInvoiceSiiDataDto)
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `isMigrated` (boolean): IsMigrated. Read only.
- `hasPendingCostAllocationProcesses` (boolean): Indicates if there are pending cost allocation processes for this invoice. This counter shows whether additional costs are currently being calculated. Read only.
- `allocatedCostsDistributionCriteria` (string): Criteria used for the distribution of allocated costs. Read only.
- `rateId` (string:uuid): nullable: true Purchase Rate Identifier. Non-mandatory field. Required when Purchase Rates functionality is enabled in the company.
- `discountId` (string:uuid): Purchase Discount identifier. Null = No discount applied. Other values = An existing discount of the company.

## PurchaseInvoiceLineDTO

- `id` (string): Id
- `description` (string): Description
- `units` (number:double): Units. Default value is 1.
- `price` (number:double): Price. Default value is 0.
- `discountRate1` (number:double): Discount rate. Default value is the supplier discount.
- `productId` (string): Id Product. Default value is null
- `productCode` (string): Product code. Read only.
- `expenseTypeId` (string): Id Expense type. Default value is null
- `taxDeductionType` (string): Tax deductionType Non deductible = "N" Deductible = "D"
- `taxTypeCode` (string): Tax type code
- `taxRate` (number:double): Tax rate. Read only.
- `taxSurchargeRate` (number:double): Tax surcharge
- `isExpense` (boolean): Expenses paid on behalf of the supplier?
- `taxBase` (number:double): Tax base. Read only.
- `sourceDocument` (DocumentLineInfoDTO)
- `annotations` (string): Annotations
- `affectStock` (boolean): Line affects stock. Read only.
- `idFeePeriodLog` (string)
- `additionalCost` (number:double): Additional cost calculated to the allocated unit cost.Read only.
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `traceabilityDetails` (TraceabilityDetailDto[]): This collection contains the specific traceability information for the product in the invoice line. It is mandatory to inform whether the product has traceability, and the sum of the quantities of these details must be equal to the number of units in the line.
- `priceOrigin` (string): Price origin: None, Rate, Product, Manual
- `discountOrigin` (string): Discount origin: None, Discount, Supplier, Manual
- `rectifiedId` (string): RectifiedCorrelationId
- `supplierProductReferenceCode` (string): SupplierProductReferenceCode
- `supplierProductReferenceDescription` (string): SupplierProductReferenceDescription

## PurchaseInvoiceSiiDataDto

- `id` (string): Identifier.
- `documentId` (integer): Document Id
- `invoiceDescription` (string): Invoice Description
- `numberInitialInvoice` (string): Number initial invoice
- `numberFinalInvoice` (string): Number final invoice
- `invoiceSpecialRegime` (boolean): Is invoice in special regime?
- `taxBaseAtCost` (number:double): Tax base at cost
- `siiRegistrationDate` (string:date-time): Sii Registration Date
- `regimeCode` (string): Regime type
- `documentTypeCode` (string): Document type
- `a3InnuvaId` (string:uuid): A3InnuvaId

## PurchaseOperationTypeDTO

- `code` (string): Code
- `description` (string): Description
- `applyTax` (boolean): Is Tax applied?
- `applyEquivalenceSurcharge` (boolean): Is Equivalence Surcharge applied?
- `applyWithholdingAlsoOverTax` (boolean): Is withholding applied over tax?
- `addTaxToTotal` (boolean): Tax is added to total?

## PurchaseOperationTypeDTOArray

Lista de `PurchaseOperationTypeDTO`.

## PurchaseOrderDTO

- `id` (string): Identifier
- `date` (string:date-time): Date. If null, system date is used.
- `deliveryDate` (string:date-time): Delivery date. If null, system date is used.
- `supplierId` (string): Supplier identifier. The identifier of an existing Customer.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber. Read only.
- `reference` (string): Reference
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in customer. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in customer. Other values = An existing payment type of the company.
- `vatNumber` (string): Vat number
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `operationTypeCode` (string): Purchase operation type code
- `isTaxIncluded` (boolean): Is tax included in the order
- `isTaxBaseAffected` (boolean): Is tax base affected in the order
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `annotations` (string): Annotations
- `taxBase` (number:double): Order tax base. Read only.
- `totalTax` (number:double): Order total tax. Read only.
- `total` (number:double): Order total. Read only.
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `version` (string): Document version. Read only
- `lines` (PurchaseOrderLineDTO[]): Lines
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `situation` (string): Situation. Read only
- `totalPromptPayment` (number:double): Total prompt payment
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `purchaseCurrency` (string): Purchase currency. Read only
- `taxRetentionPercentage` (number:double): tax retention percentage
- `taxRetentionBase` (number:double): Tax retention base
- `totalRetention` (number:double): Order total retention. Read only
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `rateId` (string:uuid): nullable: true Purchase Rate Identifier. Non-mandatory field. Required when Purchase Rates functionality is enabled in the company.
- `discountId` (string:uuid): Purchase Discount identifier. Null = No discount applied. Other values = An existing discount of the company.
- `purchaseOrderGenerationId` (string:uuid): Purchase order generation identifier. Null when the order was not created from a proposal generation.

## PurchaseOrderLineDTO

- `id` (string): Id
- `description` (string): Description
- `units` (number:double): Units. Default value is 1.
- `servedUnits` (number:double): Served units. Read only
- `cancelledUnits` (number:double): Cancelled units. Read only
- `price` (number:double): Price. Default value is 0.
- `discountRate1` (number:double): Discount rate. Default value is the client discount.
- `productId` (string): Id Product. Default value is null
- `productCode` (string): Product code. Only for display purposes. Read only.
- `taxTypeCode` (string): Tax type code
- `taxRate` (number:double): Tax rate. Read only
- `taxSurchargeRate` (number:double): Tax surcharge
- `isExpense` (boolean): Expenses paid on behalf of the client?
- `taxBase` (number:double): Tax base. Read only.
- `annotations` (string): Annotations
- `expenseTypeId` (string): Id Expense type. Default value is null
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `situation` (string): Situation. Read only A = Active S = Served
- `sourceDocument` (DocumentLineInfoDTO)
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `priceOrigin` (string): Price origin: None, Rate, Product, Manual
- `discountOrigin` (string): Discount origin: None, Discount, Supplier, Manual
- `supplierProductReferenceCode` (string): Supplier's product reference code associated with the line. Read only.
- `supplierProductReferenceDescription` (string): Description of the supplier's product reference associated with the line. Read only.
- `proposalId` (string:uuid): Purchase order proposal identifier. Read only.
- `proposalDate` (string:date-time): Purchase order proposal creation date. Read only.

## RateDTO

- `id` (string): Identifier
- `code` (string): Code
- `description` (string): Description

## RateDTOArray

Lista de `RateDTO`.

## RegularizationDTO

- `id` (string): Id
- `productId` (string): Product id
- `units` (number:double): Units
- `date` (string:date-time): Date
- `reason` (string): Reason
- `annotations` (string): Annotations

## RegularizationDTOArray

Lista de `RegularizationDTO`.

## RelatedInvoiceDTO

- `id` (string): Id
- `invoiceType` (integer): Invoice type
- `invoiceDate` (string:date-time): Invoice date
- `documentNumber` (string): DocumentNumber
- `relatedInvoiceDescription` (string): Related invoice description
- `logDate` (string:date-time): Movement Date

## RemittanceDTO

- `id` (string): Identifier.
- `number` (string): Number.
- `bankId` (string): Bank Identifier.
- `bankName` (string): BankName.
- `date` (string:date-time): Data
- `situation` (integer): Situation. Charged = 1 PartiallyCharged = 2 Pending = 3 ChargeTotal = 4
- `amount` (number:double): Amount
- `chargedAmount` (number:double): ChargedAmount
- `chargeDate` (string:date-time): ChargeDate.
- `mandateType` (string): MandateType
- `isMediaGenerated` (boolean): IsMediaGenerated.
- `annotations` (string): Annotations.
- `isFullyPaidAtOnce` (boolean): IsFullyPaidAtOnce.
- `maxAmount` (number:double): MaxAmount.
- `hasMaxAmount` (boolean): HasMaxAmount.
- `currency` (string): Currency.
- `dues` (DueDTO[]): Dues.
- `activityId` (string): Activity Id
- `isMigrated` (boolean): IsMigrated. Read only.
- `journala3InnuvaId` (string): Return Journala3InnuvaId. Read only.

## ReportTemplateDTO

- `id` (string)
- `code` (string)
- `title` (string)
- `tags` (string)

## ReportTemplateDTOArray

Lista de `ReportTemplateDTO`.

## ReportsGet200ApplicationJsonResponse


## RepresentativeDTO

- `id` (string)
- `name` (string): Name
- `mail` (string): Mail
- `phone` (string): Phone
- `commissionPercentage` (number:double): CommissionPercentage
- `applyOver` (integer): Apply over. Read only. Price = 1, Margin = 2,
- `commissionWhen` (integer): Comission when. Read only. Invoiced = 1, Charged = 2,
- `annotations` (string): Anotations

## RepresentativeDTOArray

Lista de `RepresentativeDTO`.

## Response

- `ok` (boolean): Command was ok?
- `result` (object): Command result
- `messages` (Message[]): Error messages

## SaleDeliveryNoteDTO

- `id` (string): Identifier
- `date` (string:date-time): Date. If null, system date is used.
- `receptionDate` (string:date-time): Reception date. If null, system date is used.
- `customerId` (string): Customer identifier. The identifier of an existing Customer.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber. Read only.
- `reference` (string): Reference
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in customer. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in customer. Other values = An existing payment type of the company.
- `vatNumber` (string): Vat number
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `operationTypeCode` (string): Sale operation type code
- `isTaxIncluded` (boolean): Is tax included in the order
- `rateId` (string): Sale rate identifier. Null = Default sale rate selected in customer. Other values = An existing sale rate of the company.
- `isTaxBaseAffected` (boolean): Is tax base affected in the order
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `annotations` (string): Annotations
- `taxBase` (number:double): Delivery note tax base. Read only.
- `totalTax` (number:double): Delivery note total tax. Read only.
- `total` (number:double): Delivery note total. Read only.
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `version` (string): Document version. Read only
- `lines` (SaleDeliveryNoteLineDto[]): Lines
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `billable` (boolean): Billable
- `situation` (string): Situation. Read only
- `totalPromptPayment` (number:double): Total prompt payment
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `saleCurrency` (string): Sale currency. Read only
- `taxRetentionPercentage` (number:double): Tax retention percentage
- `taxRetentionBase` (number:double): Tax retention base
- `totalRetention` (number:double): Delivery note total retention. Read only
- `processId` (string)
- `deliveryAddressId` (string:uuid)
- `carrierId` (string:uuid): Carrier Id
- `phone` (string)
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `discountId` (string:uuid): Sale Discount identifier. Null = No discount applied. Other values = An existing discount of the company.
- `customerTransactionType` (integer): Customer transaction type.
- `customerSendPdfByEmail` (boolean): Customer send pdf by email.

## SaleDeliveryNoteLineDto

- `id` (string): Id
- `description` (string): Description
- `units` (number:double): Units. Default value is 1.
- `packages` (number:double): UnitsInPackage. Default value is 0.
- `bundles` (number:double): PackagesInBundle. Default value is 0.
- `servedUnits` (number:double): Served units. Read only
- `servedPackages` (number:double): Served Packages. Read only.
- `cancelledPackages` (number:double): Cancelled Packages. Read only.
- `servedBundles` (number:double): Served Bundles. Read only.
- `cancelledBundles` (number:double): Cancelled Bundles. Read only.
- `cancelledUnits` (number:double): Cancelled units. Read only
- `price` (number:double): Price. Default value is 0.
- `discountRate1` (number:double): Discount rate. Default value is the client discount.
- `productId` (string): Id Product. Default value is null
- `productCode` (string): Product code. Only for display purposes. Read only.
- `taxTypeCode` (string): Tax type code. If it's a kit, prevails the VAT of the components. If the components have different VAT rates, prevails the one from the largest tax base
- `taxRate` (number:double): Tax rate. Read only.
- `taxSurchargeRate` (number:double): Tax surcharge
- `isExpense` (boolean): Expenses paid on behalf of the client?
- `taxBase` (number:double): Tax base. Read only.
- `annotations` (string): Annotations
- `incomeTypeId` (string): Id Income type. Default value is null
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `situation` (string): Situation. Read only A = Active S = Served
- `sourceDocument` (DocumentLineInfoDTO)
- `warehouseCorrelationId` (string:uuid)
- `componentsLine` (SaleDeliveryNoteLineDto[]): List of SaleDeliveryNoteLineDto with kit components
- `kitProductBehaviours` (KitProductBehavioursDto)
- `traceabilityDetails` (TraceabilityDetailDto[]): This collection contains the specific traceability information for the product in the invoice line. It is mandatory to inform whether the product has traceability, and the sum of the quantities of these details must be equal to the number of units in the line.
- `priceBy` (string): Price by: Units or Tiers
- `priceOrigin` (string): Price origin: None, Rate, Product, Manual
- `unitPrice` (number:double): UnitPrice. Default value is 0 Property is read only
- `discountOrigin` (string): Price origin: None, Discount, Product, Manual

## SaleInvoiceDTO

- `id` (string): Identifier.
- `date` (string:date-time): Date. If null, system date is used.
- `accountingDate` (string:date-time)
- `transactionDate` (string:date-time)
- `customerId` (string): Customer identifier.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber. Read only.
- `reference` (string): Reference.
- `bankId` (string): Bank identifier. Null = Default bank selected in customer. Other values = An existing bank of the company.
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in customer. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in customer. Other values = An existing payment type of the company.
- `vatNumber` (string): Vat number
- `vatNumberType` (integer): Vat number type None = 0, Cif = 1, Nif = 2, Nie = 3, NifIntracom = 4, Other = 5, Passport = 6, ResidenceCountryOfficialDocument = 7, TaxResidenceCertificate = 8
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `directDebitId` (string): Direct debit identifier.
- `operationTypeCode` (string): Sale operation type code
- `invoiceType` (string): Invoice type: 'B': Goods. 'S': Services. 'F': Real state. 'I': Real inversion
- `isRent` (boolean): Is rent invoice
- `rateId` (string): Sale rate identifier. Null = Default sale rate selected in customer. Other values = An existing sale rate of the company.
- `discountId` (string:uuid): Sale Discount identifier. Null = No discount applied. Other values = An existing discount of the company.
- `isTaxIncluded` (boolean): Is tax included in the invoice
- `isTaxBaseAffected` (boolean): Is tax base affected in the invoice
- `totalPromptPayment` (number:double): Total prompt payment
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `taxRetentionBase` (number:double): Tax retention base
- `taxRetentionPercentage` (number:double): tax retention percentage
- `taxRetentionTypeCode` (string): Tax retention type code.
- `annotations` (string): Annotations
- `taxBase` (number:double): Invoice tax base. Read only.
- `totalTax` (number:double): Invoice total tax. Read only.
- `totalRetention` (number:double): Invoice total retention.
- `total` (number:double): Invoice total. Read only.
- `saleCurrency` (string): Sale currency. Read only.
- `situation` (integer): Situation. Read only.
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `representativeId` (string): Representative identifier. The identifier of an existing Representative.
- `representativeName` (string): Representative name. The name of an existing Representative. Read only.
- `version` (string): Document version. Read only.
- `isRectificative` (boolean): Is rectificative. Read only.
- `rectificationType` (integer): Rectification type.
- `rectifiedId` (string): rectified id. Read only.
- `rectifiedDate` (string:date-time): rectified date. Read only.
- `rectifiedNumber` (string): rectified number. Read only.
- `isRectified` (boolean): Is rectified. Read only.
- `rectificativeId` (string): rectificative id. Read only.
- `rectificativeDate` (string:date-time): rectificative date. Read only.
- `rectificativeNumber` (string): rectificative number. Read only.
- `siiData` (SaleInvoiceSiiDataDto)
- `faceData` (SaleInvoiceFaceDataDto)
- `guaranteeRetentionData` (SaleInvoiceGuaranteeRetentionDataDto)
- `lines` (SaleInvoiceLineDTO[]): Lines.
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `chargedAmounts` (InvoiceChargeDTO[]): Charges to apply when de invoice is created
- `ticketBai` (TBAIFootPrintDTO)
- `isAntiFraudRegistered` (boolean): IsAntiFraudRegistered. Read only.
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `isMigrated` (boolean): IsMigrated. Read only.
- `customerTransactionType` (integer): Customer transaction type. Read only.
- `customerSendPdfByEmail` (boolean): Customer send pdf by email. Read only.
- `extendedInformation` (SaleInvoiceExtendedInfoDTO)
- `qrUrl` (string)
- `logDateUtc` (string:date-time)
- `electronicBillState` (integer): Last electronic bill state.

## SaleInvoiceExtendedInfoDTO

- `id` (integer): Id of Extended Info
- `tenantId` (string): Id of tenant
- `antiFraudeLogStatus` (integer): status of the request to AEAT PendingToSend = 1, ReceivedOk = 2, Rejected = 3, ReceivedWithWarnings = 4, Error = 5, DontApply = 6, Registered = 7, Unknown = 99
- `ticketBAILogStatus` (integer): status of the request to TicketBAI PendingToSend = 1, ReceivedOk = 2, Rejected = 3, ReceivedWithWarnings = 4, Error = 5
- `aeatResponseDescription` (string): Description of the response to AEAT
- `aeatResponseCode` (string): Code of the response to AEAT
- `invoiceSent` (string:date-time): Date of the request to AEAT
- `sifNotApplyReason` (integer): Reason to not apply status BelongSii = 1, BelongTicketBai = 2, Exempt = 3, GeneratedByOtherSIF = 4 , Navarra = 5, FueraDeEspanya = 6, Other = 7 FueraAmbitoSubjetivoArticulo31 = 8
- `sifNotApplyDescriptionMessages` (string): Description to not apply status
- `logDate` (string:date-time): Date of log saved
- `subsanacionRejected` (boolean): indicates that it is a rejection of a correction(=true).
- `rectifiedDate` (string:date-time): Gets or sets the rectified date associated with the current operation or entity.
- `rectifiedDocumentNumber` (string): Gets or sets the rectified document number associated with the current operation.
- `rectifiedIssuer` (string): Gets or sets the rectified issuer value.

## SaleInvoiceFaceDataDto

- `id` (string): Identifier.
- `accountingOfficeCode` (string): Accounting Office Code
- `accountingOffice` (string): Accounting Office
- `organManagingCode` (string): Organ Managing Code
- `organManaging` (string): Organ Managing
- `processingUnitCode` (string): Processing Unit Code
- `processingUnit` (string): Processing Unit
- `proposingOrganCode` (string): Proposing Organ Code
- `proposingOrgan` (string): Proposing Organ
- `fileReference` (string): File Reference

## SaleInvoiceGuaranteeRetentionDataDto

- `id` (string): Identificador.
- `hasGuaranteeRetention` (boolean): Indica si aplica la retención por garantía de obra.
- `workDelivery` (integer): Tipo de entrega de la obra (p. ej., entregada, no entregada).
- `reference` (string): Referencia opcional relacionada con la retención.
- `amount` (number:double): Importe total sujeto a retención.
- `appliesVAT` (boolean): Indica si la retención aplica IVA.
- `retentionBase` (number:double): Base utilizada para calcular la retención.
- `retentionPercentage` (number:double): Porcentaje de la retención.
- `retentionAmount` (number:double): Importe calculado de la retención.
- `amountState` (boolean): Indica si el importe total se calcula automáticamente.
- `retentionBaseState` (boolean): Indica si la base de retención se calcula automáticamente.
- `retentionAmountState` (boolean): Indica si el importe de la retención se calcula automáticamente.

## SaleInvoiceLineDTO

- `id` (string): Id
- `description` (string): Description
- `units` (number:double): Units. Default value is 1
- `packages` (number:double): Packages. Default value is 0
- `bundles` (number:double): Bundles. Default value is 0
- `price` (number:double): Price. Default value is 0
- `discountRate1` (number:double): Discount rate. Default value is the client discount
- `productId` (string): Id Product. Default value is null
- `productCode` (string): Product code. Only for display purposes. Read only
- `incomeTypeId` (string): Id Income type. Default value is null
- `taxTypeCode` (string): Tax type code. If it's a kit, prevails the VAT of the components. If the components have different VAT rates, prevails the one from the largest tax base
- `taxRate` (number:double): Tax rate. Read only
- `taxSurchargeRate` (number:double): Tax surcharge
- `isExpense` (boolean): Expenses paid on behalf of the client?
- `taxBase` (number:double): Tax base. Read only
- `sourceDocument` (DocumentLineInfoDTO)
- `annotations` (string): Annotations
- `affectStock` (boolean): Line affects stock. Read only
- `commissionPercentage` (number:double): Commission representative percentage
- `idFeePeriodLog` (string): Fee period log Id. Read only
- `confidentiality` (boolean): Confidentiality. Default false. Read only, not applies if is kit
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `traceabilityDetails` (TraceabilityDetailDto[]): This collection contains the specific traceability information for the product in the invoice line. It is mandatory to inform whether the product has traceability, and the sum of the quantities of these details must be equal to the number of units in the line.
- `componentsLine` (SaleInvoiceLineDTO[]): List of SaleInvoiceLineDTOs with kit components
- `kitProductBehaviours` (KitProductBehavioursDto)
- `priceBy` (string): Price by: Units or Tiers
- `priceOrigin` (string): Price origin: None, Rate, Product, Manual
- `unitPrice` (number:double): UnitPrice. Default value is 0 Property is read only
- `rectifiedId` (string): RectifiedCorrelationId
- `discountOrigin` (string): Discount origin: Discount, Manual, Fee, None, Customer, Supplie

## SaleInvoiceSiiDataDto

- `id` (string): Identifier.
- `invoiceDescription` (string): Invoice Description
- `customerNifNoCensado` (boolean): Customer Nif no censado
- `numberInitialInvoice` (string)
- `numberFinalInvoice` (string): Number initial invoice
- `invoiceSpecialRegime` (boolean): Is invoice in special regime?
- `taxBaseAtCost` (number:double): Tax base at cost
- `invoiceEmittedByThirdParty` (boolean): Is mitted by a third party?
- `manyRecipients` (boolean): Has many recipients
- `bonusesOrDiscounts` (boolean): Has bonuses or discounts?
- `a3InnuvaId` (string:uuid): A3InnuvaId
- `regimeCode` (string): Regime type
- `documentTypeCode` (string): Document type

## SaleOfferDTO

- `id` (string): Identifier
- `date` (string:date-time): Date. If null, system date is used.
- `expirationDate` (string:date-time): Expiration date. If null, system date is used.
- `state` (string): States: Accepted = "AC" Pending = "PA" Rejected = "RE"
- `customerId` (string): Customer identifier.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber. Read only.
- `reference` (string): Reference
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in customer. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in customer. Other values = An existing payment type of the company.
- `vatNumber` (string): Vat number
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `operationTypeCode` (string): Sale operation type code
- `isTaxIncluded` (boolean): Is tax included in the offer
- `rateId` (string): Sale rate identifier. Null = Default sale rate selected in customer. Other values = An existing sale rate of the company.
- `isTaxBaseAffected` (boolean): Is tax base affected in the offer
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `annotations` (string): Annotations
- `taxBase` (number:double): Offer tax base. Read only.
- `totalTax` (number:double): Offer total tax. Read only.
- `total` (number:double): Offer total. Read only.
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `version` (string): Document version. Read only.
- `lines` (SaleOfferLineDTO[]): Lines
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `situation` (string): Situation. Read only.
- `totalPromptPayment` (number:double): Total prompt payment
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `saleCurrency` (string): Sale currency. Read only.
- `taxRetentionPercentage` (number:double): tax retention percentage
- `taxRetentionBase` (number:double): Tax retention base
- `totalRetention` (number:double): Offer total retention. Read only.
- `representativeId` (string): Representative identifier. The identifier of an existing Representative.
- `representativeName` (string): Representative name. The name of an existing Representative.Read only.
- `discountId` (string:uuid): Purchase Discount identifier. Null = No discount applied. Other values = An existing discount of the company.
- `customerTransactionType` (integer): Customer transaction type
- `customerSendPdfByEmail` (boolean): Customer send pdf by email

## SaleOfferLineDTO

- `id` (string): Id
- `description` (string): Description
- `units` (number:double): Units. Default value is 1.
- `bundles` (number:double): Bundles. Default value is 0.
- `packages` (number:double): Pacakages. Default value is 0.
- `servedUnits` (number:double): Served units. Read only.
- `cancelledUnits` (number:double): Cancelled units. Read only.
- `servedPackages` (number:double): Served Packages. Read only.
- `cancelledPackages` (number:double): Cancelled Packages. Read only.
- `servedBundles` (number:double): Served Bundles. Read only.
- `cancelledBundles` (number:double): Cancelled Bundles. Read only.
- `price` (number:double): Price. Default value is 0.
- `discountRate1` (number:double): Discount rate. Default value is the client discount.
- `productId` (string): Id Product. Default value is null
- `productCode` (string): Product code. Only for display purposes. Read only.
- `taxTypeCode` (string): Tax type code. If it's a kit, prevails the VAT of the components. If the components have different VAT rates, prevails the one from the largest tax base
- `taxRate` (number:double): Tax rate. Read only.
- `taxSurchargeRate` (number:double): Tax surcharge
- `isExpense` (boolean): Expenses paid on behalf of the client?
- `taxBase` (number:double): Tax base. Read only.
- `annotations` (string): Annotations
- `incomeTypeId` (string): Id Income type. Default value is null
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `situation` (string): Situation. Read only. A = Active S = Served
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `componentsLine` (SaleOfferLineDTO[]): List of SaleOfferLineDTO with the components of the kit
- `kitProductBehaviours` (KitProductBehavioursDto)
- `priceBy` (string): Price by: Units or Tiers
- `priceOrigin` (string): Price origin: None, Rate, Product, Manual
- `unitPrice` (number:double): UnitPrice. Default value is 0 Property is read only
- `discountOrigin` (string): Price origin: None, Discount, Product, Manual

## SaleOperationTypeDTO

- `code` (string): Code
- `description` (string): Description
- `applyTax` (boolean): Is Tax applied?
- `applyEquivalenceSurcharge` (boolean): Is Equivalence Surcharge applied?

## SaleOperationTypeDTOArray

Lista de `SaleOperationTypeDTO`.

## SaleOrderDTO

- `id` (string): Identifier
- `date` (string:date-time): Date. If null, system date is used.
- `deliveryDate` (string:date-time): Delivery date. If null, system date is used.
- `customerId` (string): Customer identifier. The identifier of an existing Customer.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber. Read only.
- `reference` (string): Reference
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in customer. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in customer. Other values = An existing payment type of the company.
- `rateId` (string): Rate identifier.
- `vatNumber` (string): Vat number
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `operationTypeCode` (string): Sale operation type code
- `isTaxIncluded` (boolean): Is tax included in the order
- `isTaxBaseAffected` (boolean): Is tax base affected in the order
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `annotations` (string): Annotations
- `taxBase` (number:double): Order tax base. Read only.
- `totalTax` (number:double): Order total tax. Read only.
- `total` (number:double): Order total. Read only.
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `version` (string): Document version. Read only
- `lines` (SaleOrderLineDTO[]): Lines
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `situation` (string): Situation. Read only
- `totalPromptPayment` (number:double): Total prompt payment
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `saleCurrency` (string): Sale currency. Read only
- `taxRetentionPercentage` (number:double): tax retention percentage
- `taxRetentionBase` (number:double): Tax retention base
- `totalRetention` (number:double): Order total retention. Read only
- `deliveryAddressId` (string:uuid): Delivery address identifier
- `phone` (string): Document Phone
- `carrierId` (string:uuid): Carrier Id
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId
- `discountId` (string:uuid): Purchase Discount identifier. Null = No discount applied. Other values = An existing discount of the company.
- `customerTransactionType` (integer): Customer transaction type.
- `customerSendPdfByEmail` (boolean): Customer send pdf by email

## SaleOrderLineDTO

- `id` (string): Id
- `description` (string): Description
- `units` (number:double): Units. Default value is 1.
- `packages` (number:double): Packages. Default value is 0.
- `bundles` (number:double): Bundles. Default value is 0.
- `servedUnits` (number:double): Served units. Read only
- `cancelledUnits` (number:double): Cancelled units. Read only
- `servedPackages` (number:double): Served Packages. Read only.
- `cancelledPackages` (number:double): Cancelled Packages. Read only.
- `servedBundles` (number:double): Served Bundles. Read only.
- `cancelledBundles` (number:double): Cancelled Bundles. Read only.
- `price` (number:double): Price. Default value is 0.
- `discountRate1` (number:double): Discount rate. Default value is the client discount.
- `productId` (string): Id Product. Default value is null
- `productCode` (string): Product code. Only for display purposes. Read only.
- `taxTypeCode` (string): Tax type code. If it's a kit, prevails the VAT of the components. If the components have different VAT rates, prevails the one from the largest tax base
- `taxRate` (number:double): Tax rate. Read only
- `taxSurchargeRate` (number:double): Tax surcharge
- `isExpense` (boolean): Expenses paid on behalf of the client?
- `taxBase` (number:double): Tax base. Read only.
- `annotations` (string): Annotations
- `incomeTypeId` (string): Id Income type. Default value is null
- `customProperties` (CustomPropertyDTO[]): List of custom properties
- `situation` (string): Situation. Read only A = Active S = Served
- `sourceDocument` (DocumentLineInfoDTO)
- `warehouseCorrelationId` (string:uuid)
- `componentsLine` (SaleOrderLineDTO[]): List of SaleOrderLineDTO with the components of the kit
- `kitProductBehaviours` (KitProductBehavioursDto)
- `priceBy` (string): Price by: Units or Tiers
- `priceOrigin` (string): Price origin: None, Rate, Product, Manual
- `unitPrice` (number:double): UnitPrice. Default value is 0 Property is read only
- `discountOrigin` (string): Price origin: None, Discount, Product, Manual

## SaleRateDTO

- `id` (string): Identifier
- `rateId` (string): Rate
- `price` (number:double): Price

## SaleRateDTOArray

Lista de `SaleRateDTO`.

## SentDocumentStatusDTO

- `eMail` (string)
- `sentDate` (string:date-time)
- `downloadedDate` (string:date-time)

## SerieDTO

- `id` (string): Identifier
- `code` (string): Code
- `description` (string): Name
- `a3InnuvaActivityId` (string): A3InnuvaActivityId (Deprecated)

## SiiInvoiceTypeDTO

- `code` (string): Invoice types codes when not rectifying: TIPO_FACTURA_COMPLETA, TIPO_SIMPLIFICADA, TIPO_FACTURA_SIN_NIF (only for sales invoices), TIPO_JUSTIFICANTES_CONTABLES (only for purchase invoices) Invoice types codes when rectifying: TIPO_RECT_ERROR_FUNDADO, TIPO_RECT_CONCURSO, TIPO_RECT_DEUDA_INCOBRABLE, TIPO_RECT_RESTO, TIPO_RECT_SIMPLIFICADA,
- `description` (string): Description
- `orderUI` (integer): Order
- `correlationId` (string:uuid): GUID Correlation Id
- `isRectifying` (boolean): Rectifying
- `documentType` (integer)

## SiiInvoiceTypeDTOArray

Lista de `SiiInvoiceTypeDTO`.

## SiiRegimeTypeDTO

- `code` (string): Regime types codes when not rectifying: CLAVE_REGIMEN_GENERAL, CLAVE_AGENCIAS_VIAJES, CLAVE_COBROS_HONORARIOS (Only for sale invoices), CLAVE_CERTIFICADOS_ADM_PUBLICA (Only for sale invoices), CLAVE_TRACTO_SUCESIVO (Only for sale invoices), CLAVE_AGENCIAS_VIAJE_MEDIADOR (Only for sale invoices), CLAVE_AGENCIAS_VIAJES_MEDIACION (Only for purchase invoices) Regime types codes when rectifying: CLAVE_RECT_REGIMEN_GENERAL, CLAVE_RECT_AGENCIAS_VIAJES, CLAVE_RECT_COBROS_HONORARIOS (Only for sale invoices), CLAVE_RECT_CERTIFICADOS_ADM_PUBLICA (Only for sale invoices), CLAVE_RECT_TRACTO_SUCESIVO (Only for sale invoices), CLAVE_RECT_AGENCIAS_VIAJE_MEDIADOR (Only for sale invoices), CLAVE_RECT_AGENCIAS_VIAJES_MEDIACION (Only for purchase invoices)
- `description` (string): Description
- `orderUI` (integer): Order
- `correlationId` (string:uuid): GUID Correlation Id
- `isRectifying` (boolean)
- `documentType` (integer)

## SiiRegimeTypeDTOArray

Lista de `SiiRegimeTypeDTO`.

## StockInformationDTO

- `stockUnits` (number:double): Stock Units
- `purchaseReservationUnits` (number:double): Purchase reservation units
- `saleReservationUnits` (number:double): Sale reservation units
- `reservationUnits` (number:double): Reservation units

## SubscriptionDTO

- `applicationName` (string): Application Name
- `state` (integer): States: Created = 0 Sent = 1 SentFailure = 2 Configuring = 3 Active = 4 Rejected = 5 RejectedInProgress = 6
- `reason` (string): Reason
- `backOfficeURL` (string): BackOfficeURL
- `frontOfficeURL` (string): FrontOfficeURL
- `secret` (string): Secret

## SupplierDTO

- `id` (string): Identifier
- `creationDate` (string:date-time): Creation date. Read only.
- `enabled` (boolean): Indicates whether the supplier is enabled.
- `vatNumber` (string): VAT number
- `vatNumberType` (integer): Vat number type None = 0, Cif = 1, Nif = 2, Nie = 3, NifIntracom = 4, Other = 5, Passport = 6, ResidenceCountryOfficialDocument = 7, TaxResidenceCertificate = 8
- `supplierType` (string): Supplier type Supplier = "P" Creditor = "A"
- `code` (string): Code
- `name` (string): Name
- `businessName` (string): Business Name
- `web` (string): Web
- `address` (AddressDTO)
- `phone` (string): Phone
- `mail` (string): e-Mail
- `isSameAddress` (boolean): Is same address
- `businessAddress` (AddressDTO)
- `businessPhone` (string): Business phone
- `businessMail` (string): Business e-Mail
- `annotations` (string): The annotations attribute.
- `discountPercentage` (number:double): Discount percentage attribute.
- `purchaseType` (string): Default purchase type Common services = "S" Common goods = "C" Investments = "I"
- `bankId` (string): Bank identifier
- `paymentMethodId` (string): Payment method id
- `paymentTypeId` (string): Payment document id
- `paymentDay1` (integer): Payment day 1 attribute.
- `paymentDay2` (integer): Payment day 2 attribute.
- `paymentDay3` (integer): Payment day 3 attribute.
- `operationType` (string): Operation type attribute.
- `taxType` (string): Tax type attribute.
- `taxIncluded` (boolean): Tax included attribute.
- `withholdingPercentage` (number:double): Withholding percentage
- `withholdingModel` (string): Withholding model Model 111 = "110" Model 115/180 = "115" Model 123 = "123" Other models = "OTR"
- `withholdingKeyId` (integer): Withholding key id
- `withholdingSubKeyId` (integer): Withholding subkey id
- `expenseTypeId` (string): Expense type id
- `contact` (ContactDTO)
- `source` (string): Entity source
- `sourceId` (string): Source entity identifier
- `customProperties` (CustomPropertyDTO[]): Custom properties
- `accountCode` (string): Account code
- `accountId` (string): Account Id
- `rateId` (string): Purchase rate id nullable: true Non-mandatory field (we assign the company's default value). Required when Purchase Rates functionality is enabled in the company.
- `discountId` (string:uuid): Discount identifier nullable: true
- `hasTermsAgreement` (boolean): Indicates whether the supplier has accepted the terms agreement. Only modifiable when the ElectronicBill feature is enabled.
- `hasExtendedPaymentTerm` (boolean): Indicates whether the supplier has an extended payment term. Only modifiable when the ElectronicBill feature is enabled.

## SupplyInvoiceDTO

- `id` (string): Identifier.
- `date` (string:date-time): Date. If null, system date is used.
- `accountingDate` (string:date-time): Date. If null, system date is used.
- `supplierId` (string): Supplier identifier.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `serieId` (string): Serie identifier. Null = Default serie selected in options. Other values = An existing serie of the company.
- `number` (integer:int64): Number
- `documentNumber` (string): DocumentNumber
- `reference` (string): Reference.
- `bankId` (string): Bank identifier. Null = Default bank selected in supplier. Other values = An existing bank of the company.
- `paymentMethodId` (string): Payment Method identifier. Null = Default payment method selected in supplier. Other values = An existing payment method of the company.
- `paymentTypeId` (string): Payment Type identifier. Null= Default payment type selected in supplier. Other values = An existing payment type of the company.
- `vatNumber` (string): Vat number
- `vatNumberType` (integer): Vat number type None = 0, Cif = 1, Nif = 2, Nie = 3, NifIntracom = 4, Other = 5, Passport = 6, ResidenceCountryOfficialDocument = 7, TaxResidenceCertificate = 8
- `name` (string): Name
- `email` (string): Email
- `emailCC` (string): Email
- `address` (string): Tax address
- `zipCode` (string): Tax zip code
- `town` (string): Tax town
- `provinceCode` (string): Tax province code
- `provinceName` (string): Tax province name
- `countryCode` (string): Tax country code
- `addressDetails` (string): Tax address details
- `directDebitId` (string): Direct debit identifier.
- `operationTypeCode` (string): Purchase operation type code
- `invoiceType` (string): Supply invoice type Common services = "S" Common goods = "C" Investments = "I"
- `isRent` (boolean): Is rent supply invice
- `isTaxIncluded` (boolean): Is tax included in the supply invoice
- `isTaxBaseAffected` (boolean): Is tax base affected in the supply invoice
- `totalPromptPayment` (number:double): Total prompt payment
- `promptPaymentPercentage` (number:double): Prompt payment percentage
- `totalFinancialSurcharge` (number:double): Total financial surcharge
- `financialSurchargePercentage` (number:double): Financial surcharge percentage
- `taxRetentionBase` (number:double): Tax retention base
- `withholdingPercentage` (number:double): Withholding percentage
- `withholdingModel` (string): Withholding model Model 111 = "110" Model 115/180 = "115" Model 123 = "123" Other models = "OTR"
- `withholdingKeyId` (integer): Withholding key id
- `withholdingSubKeyId` (integer): Withholding subkey id
- `annotations` (string): Annotations
- `taxBase` (number:double): Supply invoice tax base. Read only.
- `totalTax` (number:double): Supply invoice total tax. Read only.
- `totalRetention` (number:double): Supply invoice total retention.
- `total` (number:double): Supply invoice total. Read only.
- `purchaseCurrency` (string): Purchase currency. Read only.
- `situation` (integer): Situation
- `isInmediatePayment` (boolean): Is inmediate payment
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `version` (string): Document version. Read only.
- `isRectificative` (boolean): Is rectificative. Read only.
- `rectifiedId` (string): rectified id
- `rectifiedDate` (string:date-time): rectified date. Read only.
- `rectifiedNumber` (string): rectified number. Read only.
- `isRectified` (boolean): Is rectified. Read only.
- `rectificativeId` (string): rectificative id. Read only.
- `rectificativeDate` (string:date-time): rectificative date. Read only.
- `rectificativeNumber` (string): rectificative number. Read only.
- `lines` (SupplyInvoiceLineDTO[])
- `siiData` (PurchaseInvoiceSiiDataDto)
- `isMigrated` (boolean): IsMigrated. Read only.
- `warehouseCorrelationId` (string:uuid): Warehouse CorrelationId

## SupplyInvoiceLineDTO

- `id` (string): Id
- `description` (string): Description
- `price` (number:double): Price. Default value is 0.
- `expenseTypeId` (string): Id Expense type. Default value is null
- `taxDeductionType` (string): Tax deductionType Non deductible = "N" Deductible = "D"
- `taxTypeCode` (string): Tax type code
- `taxRate` (number:double): Tax rate. Read only.
- `taxSurchargeRate` (number:double): Tax surcharge
- `isExpense` (boolean): Expenses paid on behalf of the supplier?
- `taxBase` (number:double): Tax base. Read only.
- `annotations` (string): Annotations
- `warehouseCorrelationId` (string:uuid)
- `priceOrigin` (string): Price origin: None, Rate, Product, Manual

## TBAIFootPrintDTO

- `identifier` (string): Identifier
- `qrImage` ([]): QRImage
- `qrCode` (string): QRCode

## TBAIInfoDTO

- `manufacture` (string): Manufacture
- `manufactureVat` (string): ManufactureVat
- `product` (string): Product
- `softwareVersion` (string): SoftwareVersion
- `activationDate` (string:date-time): ActivationDate
- `taxAdministration` (integer): TaxAdministration
- `epigraph` (string): Epigraph
- `lroeType` (string): LROE Type
- `companyRegime` (integer): Regimen General = 1, Simplified = 2, Equivalence Surcharge = 3

## TagDTO

- `id` (string): Identifier
- `description` (string): Description
- `type` (integer): Type None = 0 Fee = 1

## TagDTOArray

Lista de `TagDTO`.

## TaxRateDTO

- `code` (string): Tax type code
- `description` (string): Tax type description
- `type` (string): Tax Type
- `date` (string:date-time): Tax Rate applicable from
- `since` (string:date-time): Tax Rate applicable from
- `until` (string:date-time): Tax Rate applicable from
- `rate` (number:double): Rate
- `surcharge` (number:double): Surcharge

## TaxRateDTOArray

Lista de `TaxRateDTO`.

## TicketBAIDTO

- `id` (string): Id
- `invoiceType` (integer): Invoice type
- `invoiceTypeDescription` (string): Invoice type description
- `documentNumber` (string): DocumentNumber
- `invoiceDate` (string:date-time): Invoice date
- `rectifiedInvoiceId` (string): Rectified invoiceId
- `customerName` (string): Customer name
- `invoiceAmount` (number:double): Invoice smount
- `logStatus` (integer): Log status
- `logStatusDescription` (string): Log status description
- `sentDate` (string:date-time): Sent
- `invoiceId` (string): Invoice Id
- `relatedDocNumber` (string): Related Document Number
- `identifierTBAI` (string): Identifier TBAI
- `relatedInvoices` (RelatedInvoiceDTO[])
- `relatedInvoiceDescription` (string)
- `relatedDescriptionToPrint` (string)
- `logDate` (string:date-time)
- `eInvoiceOrigin` (integer): Who created the record

## TicketBAIDTOArray

Lista de `TicketBAIDTO`.

## TicketDTO

- `id` (string): Identifier.
- `activityId` (string): Activity identifier. Null = Default activity selected in options. Other values = An existing activity of the company.
- `date` (string:date-time): Date. If null, system date is used.
- `number` (string): Ticket number.
- `annotations` (string): Annotations.
- `amount` (number:double): Ticket total amount
- `bankId` (string): Bank identifier. Null = Default bank selected in supplier. Other values = An existing bank of the company.
- `expenseTypeId` (string): Expense type id
- `source` (string): Entity source.
- `sourceId` (string): Source entity identifier.
- `isMigrated` (boolean): IsMigrated. Read only.

## TokenDTO

- `access_token` (string)
- `refresh_token` (string)
- `expires_in` (integer)
- `token_type` (string)

## TraceabilityDetailDto

- `id` (string): Unique identifier of the traceability detail. - Required for update.
- `batch` (string): Batch associated with a product. - Required if the doucment line product is configured to use batches. - Maximum length of 25 characters.
- `expirationDate` (string:date-time): Expiration date of the batch. - Required if the document line product is configured to use expiration dates.
- `serialNumber` (string): Serial number of the product. - Required and unique if the document line product is configured to use serial numbers. - Maximum length of 25 characters.
- `units` (number:double): Units of the batch or serial number of a product. - Required if the document line product is configured to use serial numbers. - The units must be 1 if the product uses serial numbers. - the units can't be zero
- `entryDate` (string:date-time): Entry date. - Required for out operations when the expiration date is not configured.
- `packages` (number:double): Packages. Default value is 0
- `bundles` (number:double): Bundles. Default value is 0

## WithHoldingKeyDTO

- `id` (integer): Identifier
- `code` (string): Code
- `description` (string): Name
- `percentage` (number:double): Percentage
- `dateFrom` (string:date-time): DateFrom
- `dateTo` (string:date-time): DateTo

## WithHoldingKeyDTOArray

Lista de `WithHoldingKeyDTO`.

## WithHoldingSubKeyDTO

- `id` (integer): Identifier
- `code` (string): Code
- `description` (string): Name
- `withHoldingKeyId` (integer): With holding key Identifier
- `percentage` (number:double): Percentage
- `dateFrom` (string:date-time): DateFrom
- `dateTo` (string:date-time): DateTo

## WithHoldingSubKeyDTOArray

Lista de `WithHoldingSubKeyDTO`.

## ZipCodeDTO

- `id` (integer): Identifier
- `code` (string): Code
- `provinceCode` (string): Province Code
- `town` (string): Towns

## ZipCodeDTOArray

Lista de `ZipCodeDTO`.
