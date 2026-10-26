# API a3innuva Contabilidad · los campos de las respuestas

Un apartado por tipo de respuesta, con sus campos y su tipo. Los datos son inventados: los de personas (nombre, DNI, NAF, importes) también se pueden usar.

## Account

- `correlationId` (string)
- `code` (string)
- `description` (string)
- `state` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## AccountBank

- `correlationId` (string)
- `iban` (string)
- `accountCorrelationId` (string)
- `accountCode` (string)
- `state` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## AccountingYear

- `correlationId` (string)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `description` (string)
- `profitAndLossBalanceId` (integer:int64)
- `stateBalanceId` (integer:int64)
- `state` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## AccountingYearState

Valores: 0, 1, 2, 3, 99

## Activity

- `description` (string)
- `shortDescription` (string)
- `state` (string)
- `startDate` (string)
- `endDate` (string)
- `correlationId` (string)
- `taxation` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## Channel

- `description` (string)
- `shortDescription` (string)
- `state` (string)
- `correlationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## Charge

- `customerCorrelationId` (string)
- `customerAccountCorrelationId` (string)
- `customerAccountCode` (string)
- `issuedInvoiceCorrelationId` (string)
- `issuedInvoiceNumber` (string)
- `issuedInvoiceDate` (string)
- `correlationId` (string)
- `situation` (string)
- `amount` (number:double)
- `date` (string)
- `accountBankCorrelationId` (string)
- `accountBankCode` (string)
- `state` (string)
- `vatNumberCorrelationId` (string)
- `vatNumber` (string)
- `vatName` (string)
- `journalCorrelationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## Company

- `vatName` (string)
- `vatNumber` (string)
- `state` (string)
- `chartOfAccountId` (integer:int64)
- `accountLength` (integer)
- `correlationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## Customer

- `tradeName` (string)
- `state` (string)
- `vatNumber` (string)
- `vatName` (string)
- `accountCode` (string)
- `correlationId` (string)
- `vatNumberCorrelationId` (string)
- `accountCodeCorrelationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)
- `fiscalData` (IFiscalData)

## Date

- `day` (integer)
- `month` (integer)
- `ticks` (integer:int64)
- `value` (string)
- `year` (integer)

## IChartOfAccount

- `id` (integer:int64)
- `description` (string)

## IFiscalData

- `lines` (IFiscalDataTaxConfiguration[])

## IFiscalDataTaxConfiguration

- `taxation` (string)
- `transaction` (string)
- `tax` (string)
- `withHolding` (string)
- `counterpartCorrelationId` (string)
- `counterpart` (string)
- `hasSurcharge` (boolean)

## IInvoiceLineResume

- `transactionCorrelationId` (integer:int64)
- `transaction` (string)
- `taxCorrelationId` (integer)
- `tax` (string)
- `baseAmount` (number:double)
- `taxAmount` (number:double)
- `taxSurchargeAmount` (number:double)
- `withHoldingCorrelationId` (integer)
- `withHolding` (string)
- `withHoldingAmount` (number:double)

## IJournalLineResume

- `document` (string)
- `concept` (string)
- `accountCorrelationId` (string)
- `accountCode` (string)
- `accountDescription` (string)
- `isAmountOnDebit` (boolean)
- `amount` (number:double)
- `journalLineType` (string)

## IReadAccountingYear

- `version` (string:date-time)
- `sequenceVersion` (integer:int64)
- `timestamp` (integer:int64)
- `correlationId` (string)
- `id` (string:uuid)
- `tenantId` (string)
- `partitionClientId` (string)
- `startDate` (Date)
- `endDate` (Date)
- `description` (string)
- `profitResultAccount` (string)
- `loseResultAccount` (string)
- `profitAndLossBalanceId` (integer:int64)
- `stateBalanceId` (integer:int64)
- `state` (AccountingYearState)

## InputInvoiceAdditionalDataResume

- `registryDate` (string)
- `duaDocumentId` (string)
- `description` (string)
- `typeOfDocument` (string)
- `fundamental` (string)
- `initialNumberOfDocument` (string)
- `lastNumberOfDocument` (string)
- `invoicesInSpecialRegime` (boolean)
- `taxableIncomeAtCost` (number:double)
- `correlationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## InvoiceInputResume

- `correlationId` (string)
- `activityCorrelationId` (string)
- `channelCorrelationId` (string)
- `invoiceDate` (string)
- `journalDate` (string)
- `transactionDate` (string)
- `invoiceNumber` (string)
- `vatNumberCorrelationId` (string)
- `tradeName` (string)
- `isCorrective` (boolean)
- `correctiveInvoiceNumber` (string)
- `totalAmount` (number:double)
- `approvalState` (string)
- `lines` (IInvoiceLineResume[])
- `source` (string)
- `journalCorrelationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)
- `supplierCorrelationId` (string)
- `activityShortDescription` (string)
- `channelShortDescription` (string)
- `vatName` (string)
- `vatNumber` (string)
- `state` (string)

## InvoiceIssuedResume

- `correlationId` (string)
- `activityCorrelationId` (string)
- `channelCorrelationId` (string)
- `invoiceDate` (string)
- `journalDate` (string)
- `transactionDate` (string)
- `invoiceNumber` (string)
- `vatNumberCorrelationId` (string)
- `tradeName` (string)
- `isCorrective` (boolean)
- `correctiveInvoiceNumber` (string)
- `totalAmount` (number:double)
- `approvalState` (string)
- `lines` (IInvoiceLineResume[])
- `source` (string)
- `journalCorrelationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)
- `customerCorrelationId` (string)
- `activityShortDescription` (string)
- `channelShortDescription` (string)
- `vatName` (string)
- `vatNumber` (string)
- `state` (string)

## IssuedInvoiceAdditionalDataResume

- `notIncludedInCensus` (boolean)
- `invoiceByThird` (boolean)
- `multipleRecipients` (boolean)
- `couponsBonusesOrDiscounts` (boolean)
- `description` (string)
- `typeOfDocument` (string)
- `fundamental` (string)
- `initialNumberOfDocument` (string)
- `lastNumberOfDocument` (string)
- `invoicesInSpecialRegime` (boolean)
- `taxableIncomeAtCost` (number:double)
- `correlationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## JournalResume

- `version` (string:date-time)
- `sequenceVersion` (integer:int64)
- `correlationId` (string)
- `activityCorrelationId` (string)
- `activityShortDescription` (string)
- `channelShortDescription` (string)
- `channelCorrelationId` (string)
- `journalDate` (string)
- `approvalState` (string)
- `state` (string)
- `lines` (IJournalLineResume[])
- `source` (string)
- `journalType` (string)

## Payment

- `supplierCorrelationId` (string)
- `supplierAccountCorrelationId` (string)
- `supplierAccountCode` (string)
- `inputInvoiceCorrelationId` (string)
- `inputInvoiceNumber` (string)
- `inputInvoiceDate` (string)
- `correlationId` (string)
- `situation` (string)
- `amount` (number:double)
- `date` (string)
- `accountBankCorrelationId` (string)
- `accountBankCode` (string)
- `state` (string)
- `vatNumberCorrelationId` (string)
- `vatNumber` (string)
- `vatName` (string)
- `journalCorrelationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)

## Supplier

- `tradeName` (string)
- `state` (string)
- `vatNumber` (string)
- `vatName` (string)
- `accountCode` (string)
- `correlationId` (string)
- `vatNumberCorrelationId` (string)
- `accountCodeCorrelationId` (string)
- `version` (string:date-time)
- `sequenceVersion` (integer:int64)
- `fiscalData` (IFiscalData)

## TaxInfo

- `id` (integer)
- `code` (string)
- `description` (string)
- `percentage` (number:double)
- `surchargePercentage` (number:double)
- `hasSurcharge` (boolean)
- `type` (string)
- `startDate` (string)
- `endDate` (string)

## TransactionResume

- `taxation` (string)
- `longCode` (string)
- `description` (string)
- `shortDescription` (string)
- `startDate` (string)
- `endDate` (string)
- `validTaxTypes` (string[])
