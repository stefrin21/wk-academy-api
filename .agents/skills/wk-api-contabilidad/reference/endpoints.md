# API a3innuva Contabilidad · las 36 lecturas (GET)

Generado de la definición OpenAPI oficial del portal a3developers. Solo lecturas: en el curso no se escribe nada.

`*` = obligatorio. `query` = parámetros que van detrás de `?`. `→` = lo que devuelve (sus campos, en `schemas.md`). `permiso` = el permiso que necesita el usuario en a3innuva: si no lo tiene, la API responde 403.

Áreas: [Account Banks](#account-banks) (2), [AccountingYears](#accountingyears) (2), [Accounts](#accounts) (3), [Activities](#activities) (2), [BalanceSheets](#balancesheets) (2), [Channels](#channels) (2), [Charges](#charges) (2), [ChartOfAccounts](#chartofaccounts) (1), [Companies](#companies) (2), [Customers](#customers) (2), [Input Invoices](#input-invoices) (3), [Issued Invoices](#issued-invoices) (3), [Journals](#journals) (2), [Payments](#payments) (2), [Suppliers](#suppliers) (2), [Taxes](#taxes) (2), [Transaction](#transaction) (2)

## Account Banks

- `GET /api/accountBanks` — Get all or filtered account bank · query: pageNumber, pageSize → `AccountBank[]`
- `GET /api/accountBanks/{correlationId}` — Get an account bank by correlationId → `AccountBank`

## AccountingYears

- `GET /api/accountingYears` — Get all or filtered accounts · query: pageNumber, pageSize → `AccountingYear[]`
- `GET /api/accountingYears/{correlationId}` — Get an account by correlationId → `AccountingYear`

## Accounts

- `GET /api/accounts` — Get all or filtered accounts · query: AccountGroup, pageNumber, pageSize → `Account[]`
- `GET /api/accounts/{correlationId}` — Get an account by correlationId → `Account`
- `GET /api/accountsFinder` — Get next available account code by an account code pattern · query: AccountCodePattern → `string`

## Activities

- `GET /api/activities` — Get all or filtered activities · query: pageNumber, pageSize → `Activity[]`
- `GET /api/activities/{correlationId}` — Get an activity by correlationId → `Activity`

## BalanceSheets

- `GET /api/BalanceSheets/profitAndLost` — Get all or filtered accounts → `IReadAccountingYear[]`
- `GET /api/BalanceSheets/state` — Get all or filtered accounts → `IReadAccountingYear[]`

## Channels

- `GET /api/channels` — Get all or filtered channels · query: pageNumber, pageSize → `Channel[]`
- `GET /api/channels/{correlationId}` — Get a channel by correlationId → `Channel`

## Charges

- `GET /api/charges` — Get all or filtered charges · query: pageNumber, pageSize → `Charge[]`
- `GET /api/charges/{correlationId}` — Get a charge by correlationId → `Account`

## ChartOfAccounts

- `GET /api/chartOfAccounts` — Get chart of accounts → `IChartOfAccount[]`

## Companies

- `GET /api/companies` — Get all or filtered companies · query: pageNumber, pageSize → `Company[]`
- `GET /api/companies/{correlationId}` — Get a company by correlationId → `Company`

## Customers

- `GET /api/customers` — Get all or filtered customers · query: pageNumber, pageSize → `Customer[]`
- `GET /api/customers/{correlationId}` — Get a customer by correlationId → `Customer`

## Input Invoices

- `GET /api/inputInvoices/{correlationId}/additionalData` — Get an input invoice additional data by correlationId → `InputInvoiceAdditionalDataResume`
- `GET /api/inputInvoices` — Get all or filtered input invoices · query: pageNumber, pageSize, Document, InvoiceNumber, Year → `InvoiceInputResume[]`
- `GET /api/inputInvoices/{correlationId}` — Get an input invoice by correlationId → `InvoiceInputResume`

## Issued Invoices

- `GET /api/issuedInvoices/{correlationId}/additionalData` — Get an issued invoice additional data by correlationId → `IssuedInvoiceAdditionalDataResume`
- `GET /api/issuedInvoices` — Get all or filtered issued invoices · query: pageNumber, pageSize, Document, InvoiceNumber, Year → `InvoiceIssuedResume[]`
- `GET /api/issuedInvoices/{correlationId}` — Get an issued invoice by correlationId → `InvoiceIssuedResume`

## Journals

- `GET /api/journals` — Get all or filtered journals · query: pageNumber, pageSize → `JournalResume[]`
- `GET /api/journals/{correlationId}` — Get journal by correlationId → `JournalResume`

## Payments

- `GET /api/payments` — Get all or filtered payments · query: pageNumber, pageSize → `Payment[]`
- `GET /api/payments/{correlationId}` — Get a payment by correlationId → `Payment`

## Suppliers

- `GET /api/suppliers` — Get all or filtered suppliers · query: pageNumber, pageSize → `Supplier[]`
- `GET /api/suppliers/{correlationId}` — Get a supplier by correlationId → `Supplier`

## Taxes

- `GET /api/taxes` — Get all or filtered taxes · query: pageNumber, pageSize, Type, Code, Date → `TaxInfo[]`
- `GET /api/taxes/{id}` — Get a tax by id → `TaxInfo`

## Transaction

- `GET /api/transactions/inputInvoices` — Get all transaction for input invoices · query: pageNumber, pageSize → `TransactionResume[]`
- `GET /api/transactions/issuedInvoices` — Get all transactions for issued invoices · query: pageNumber, pageSize → `TransactionResume[]`
