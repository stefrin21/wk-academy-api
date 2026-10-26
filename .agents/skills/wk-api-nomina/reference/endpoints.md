# API a3innuva Nómina · las 189 lecturas (GET)

Generado de la definición OpenAPI oficial del portal a3developers. Solo lecturas: en el curso no se escribe nada.

`*` = obligatorio. `query` = parámetros que van detrás de `?`. `→` = lo que devuelve (sus campos, en `schemas.md`). `permiso` = el permiso que necesita el usuario en a3innuva: si no lo tiene, la API responde 403.

Áreas: [Absenteeisms](#absenteeisms) (4), [Absenteeisms - Holidays](#absenteeisms---holidays) (2), [Absenteeisms - Retributed permissions](#absenteeisms---retributed-permissions) (2), [Absenteeisms - Strikes](#absenteeisms---strikes) (2), [Absenteeisms - Unjustified absenteeisms](#absenteeisms---unjustified-absenteeisms) (2), [Absenteeisms - Unpaid employment suspensions](#absenteeisms---unpaid-employment-suspensions) (2), [Acccounting link](#acccounting-link) (3), [Agreements](#agreements) (10), [Calendars](#calendars) (5), [Common data](#common-data) (5), [Common data - Countries](#common-data---countries) (4), [Common data - Laboral](#common-data---laboral) (20), [Common data - Medical](#common-data---medical) (2), [Companies](#companies) (8), [Cost centers](#cost-centers) (4), [Custom data](#custom-data) (9), [Employee portal](#employee-portal) (6), [Employees](#employees) (12), [Employees - Advances](#employees---advances) (2), [Employees - Agreements](#employees---agreements) (2), [Employees - Bank accounts](#employees---bank-accounts) (4), [Employees - Contracts](#employees---contracts) (6), [Employees - IRPF](#employees---irpf) (4), [Employees - Job position](#employees---job-position) (5), [Employees - Labor life](#employees---labor-life) (2), [Employees - Remuneration](#employees---remuneration) (4), [Employees - Salary](#employees---salary) (3), [Employees - Unemployments](#employees---unemployments) (4), [Pays](#pays) (9), [Pays - Concepts](#pays---concepts) (3), [Professionals](#professionals) (2), [Security](#security) (2), [Temporary Disabilities (IT)](#temporary-disabilities-it) (4), [Temporary Disabilities (IT) - Accidents](#temporary-disabilities-it---accidents) (2), [Temporary Disabilities (IT) - Birth permits](#temporary-disabilities-it---birth-permits) (1), [Temporary Disabilities (IT) - Illnesses](#temporary-disabilities-it---illnesses) (2), [Temporary Disabilities (IT) - Non work accidents](#temporary-disabilities-it---non-work-accidents) (2), [Temporary Disabilities (IT) - Partial birth permits](#temporary-disabilities-it---partial-birth-permits) (1), [Temporary Disabilities (IT) - Pregnancy Risks](#temporary-disabilities-it---pregnancy-risks) (1), [Temporary Disabilities (IT) - Professional Illnesses](#temporary-disabilities-it---professional-illnesses) (2), [Training](#training) (11), [Variable concepts](#variable-concepts) (2), [Workplaces](#workplaces) (7)

## Absenteeisms

- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/{year}` — List absenteeims by employee and year → `Absenteeism[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/detail/{absenteeismID}` — Get absenteeim → `AbsenteeismDetail` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/absenteeisms/{year}/{month}` — List absenteeisms by company, year and month · query: pageSize*, pageNumber*, lastUpdate → `Absenteeism[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/workplaces/{workplacecode}/absenteeisms/{year}/{month}` — List absenteeisms by workplace, year and month · query: pageSize*, pageNumber*, lastUpdate → `Absenteeism[]` · permiso: IT y Absentismos

## Absenteeisms - Holidays

- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/holidays/{absenteeismID}` — Get employee holidays absenteeism → `HolidaysEntityResource` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/holidays` — List employee holidays absenteeisms · query: pageNumber*, pageSize*, filter, orderBy → `HolidaysCollectionItemResource` · permiso: IT y Absentismos

## Absenteeisms - Retributed permissions

- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/retributedpermissions/{year}/{month}` — List retributed permissions by year and month · query: pageSize*, pageNumber* → `PaidLeave` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/retributed-permission-types` — List retributed permision types → `PaidLeaveType` · permiso: IT y Absentismos

## Absenteeisms - Strikes

- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/strikes` — List strike absenteeisms → `AbsenteeismStrikeGetModel[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/strikes/{absenteeismID}` — Get strike absenteeism → `AbsenteeismStrikeGetModel` · permiso: IT y Absentismos

## Absenteeisms - Unjustified absenteeisms

- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/unjustifieds/{unjustifiedAbsenteeismID}` — Get unjustified absenteeism → `UnjustifiedAbsenteeismEntityResource` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/unjustifieds` — List unjustified absenteeisms · query: pageNumber*, pageSize*, filter, orderBy → `UnjustifiedAbsenteeismCollectionItemResource` · permiso: IT y Absentismos

## Absenteeisms - Unpaid employment suspensions

- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/unpaidemploymentsuspensions` — List unpaid employment suspensions → `boolean` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/unpaidemploymentsuspensions/{absenteeismID}` — Get unpaid employment suspension → `boolean` · permiso: IT y Absentismos

## Acccounting link

- `GET /api/companies/{companyCode}/accountinglinks/withoutbreakdowns/{processID}` — Get accounting link document → `WithoutBreakdownsGetOutputEntityResource` · permiso: Enlace Contable
- `GET /api/companies/{companyCode}/accountinglinks/withoutbreakdowns/mon/{monitorID}` — Get status monitor → `object` · permiso: Enlace Contable
- `GET /api/companies/{companyCode}/accounting-link-groups` — List accounting link groups · query: pageNumber*, pageSize* → `AccountingLinkGroupResource[]` · permiso: Ficha de Empresa / Contabilización

## Agreements

- `GET /api/agreements/{agreementcode}` — Get agreement → `AgreementModel` · permiso: Ficha de Convenio
- `GET /api/agreements/{agreementcode}/extrapaygroups` — List extra payments for agreement → `PayGroupModel[]` · permiso: Ficha de Convenio
- `GET /api/companies/{companyCode}/agreements/{agreementcode}/classifications` — List agreement classifications → `AgreementClassificationModel[]` · permiso: Ficha de Empresa / Convenios y Pactos
- `GET /api/companies/{companyCode}/agreements/{agreementcode}/retributed-permission-types` — List retributed permision types by Company and agreement → `AgreementRetributedPermissionTypeModel[]`
- `GET /api/companies/{companyCode}/agreements/{agreementCode}/holidays` — List agreement holidays · query: pageNumber*, pageSize* → `HolyDatesModel[]` · permiso: Ficha de Empresa / Convenios y Pactos
- `GET /api/companies/{companyCode}/agreements` — List of agreements for a company · query: pageNumber*, pageSize* → `AgreementLookupResource[]` · permiso: Ficha de Empresa / Convenios y Pactos
- `GET /api/companies/{companyCode}/agreements/{agreementCode}/{revision}/senioritygroups` — List seniority groups for agreement · query: pageNumber*, pageSize* → `AgreementSeniorityGroupLookupResource[]` · permiso: Ficha de Empresa / Convenios y Pactos
- `GET /api/companies/{companyCode}/agreements/{agreementCode}/{revision}/senioritygroups/{groupId}` — Get seniority group → `AgreementSeniorityGroupResource[]` · permiso: Ficha de Empresa / Convenios y Pactos
- `GET /api/companies/{companyCode}/agreements/{agreementCode}/{revision}/itcomplements` — List IT complements for agreement · query: pageNumber*, pageSize* → `AgreementITComplementResource[]` · permiso: Ficha de Empresa / Convenios y Pactos
- `GET /api/companies/{companyCode}/agreement/{agreementid}/classification/{classificationID}` — Get agreement classification → `ClassificationEntityResource` · permiso: Ficha de Empresa / Convenios y Pactos

## Calendars

- `GET /api/calendars/day-types` — List calendar day types → `CalendarDayTypeModel[]`
- `GET /api/calendars/work-day-types` — List calendar workday types → `CalendarWorkDayTypeModel[]`
- `GET /api/companies/{companyCode}/workplaces/{companyworkplacecode}/calendars/{year}` — Get company workplace calendar · query: pageNumber*, pageSize* → `CompanyWorkplaceCalendarModel[]` · permiso: Ficha de Empresa / Centros de Trabajo
- `GET /api/companies/{companyCode}/employees/{employeeCode}/calendar/{year}/{month}` — Get employee calendar → `CalendarDay` · permiso: Ficha de Persona / Jornada laboral
- `GET /api/companies/{companyCode}/employees/{employeeCode}/calendar` — Get employee calendar workday percentage → `CalendarWorkDayPercentage` · permiso: Ficha de Persona / Jornada laboral

## Common data

- `GET /api/companies/{companyCode}/occupation-codes` — List occupation codes → `OccupationPercentageModel[]` · permiso: Ficha de Empresa / Cotización
- `GET /api/companies/{companyCode}/payment-frequencies` — List payment frequencies → `PaymentFrequenciesModel[]` · permiso: Ficha de Empresa / Características
- `GET /api/addresstypeids` — List address types → `AddressTypeResource[]`
- `GET /api/sextypes` — List gender types → `SexTypeResource[]`
- `GET /api/persontypes` — List person types → `PersonTypeResource[]`

## Common data - Countries

- `GET /api/municipalities` — List municipalities · query: pageNumber*, pageSize* → `Municipality[]`
- `GET /api/countries/{isocountryid}/Regions` — List regions · query: pageNumber*, pageSize*, filter, orderBy → `RegionCollectionResource`
- `GET /api/countries/{isocountryid}/postalcodes` — List postalcodes · query: pageNumber*, pageSize*, filter, orderBy → `PostalCodeCollectionResource`
- `GET /api/countries` — List countries · query: pageNumber*, pageSize*, filter, orderBy → `CountriesCollectionResource`

## Common data - Laboral

- `GET /api/perceptiontypecodes` — List perception type codes → `KeyValuePairStringString`
- `GET /api/jobTitlesDescription` — Get job title · query: pageNumber*, pageSize* → `JobTitleDescriptionItem[]`
- `GET /api/jobTitles` — List of Job Titles · query: pageNumber*, pageSize* → `JobTitle[]`
- `GET /api/jobPositions` — List job positions · query: pageNumber*, pageSize* → `JobPosition[]`
- `GET /api/paytypes` — List pay types → `KeyValuePairInt32String`
- `GET /api/educationlevels` — List education levels → `KeyValuePairInt32String`
- `GET /api/cnooccupations` — List of CNO Occupation codes → `Occupation[]`
- `GET /api/specialcontracts` — List Special contracts affiliation data → `SpecialContract[]`
- `GET /api/collectivetypes` — List Collective types affiliation data → `CollectiveType[]`
- `GET /api/contracttypes` — List contract types → `ContractType[]`
- `GET /api/jobpositiondropcauses` — List job position drop causes → `JobPositionDropCause`
- `GET /api/hiringdatesdropcauses` — List drop causes → `KeyValuePairInt32String[]`
- `GET /api/testdaytypes` — List test days types → `KeyValuePairInt32String`
- `GET /api/dismissaltypes` — List laboral dismissal types → `DismissalTypeResource[]`
- `GET /api/perceptionSubTypes` — List perception subtype codes → `PerceptionSubkeyResource[]`
- `GET /api/contribution-types` — List contribution types → `ContributionTypeResource[]`
- `GET /api/identificationtypes` — List identification types → `IdentificationTypeResource[]`
- `GET /api/conceptcollectiontypes` — List concept collection types → `ConceptCollectionType[]`
- `GET /api/paytypegroups` — List pay type groups → `string[]`
- `GET /api/paytypegroups/{paygroupid}` — Get pay type group → `PayTypeGroup[]`

## Common data - Medical

- `GET /api/medicalcheckupstates` — List of medical checkup states → `MedicalCheckupStateResource[]`
- `GET /api/medicalcheckuptypes` — List of medical checkup types → `MedicalCheckupTypeResource[]`

## Companies

- `GET /api/companies/{companyCode}/regimes` — List regimes for company → `RegimeModel[]` · permiso: Ficha de Empresa / Cotización
- `GET /api/companies/{companyCode}/regimes/{regimeid}/tariff-groups` — List tariff groups for regime → `TariffGroupModel[]` · permiso: Ficha de Empresa / Cotización
- `GET /api/companies/{companyCode}/organigram` — Get organigram for company → `OrganigramNodeResource` · permiso: Organigramas
- `GET /api/companies` — List companies · query: pageNumber*, pageSize*, filter, orderBy → `CompaniesCollectionResource[]` · permiso: Relación de Empresas
- `GET /api/companies/{companyCode}/concepts` — List company concepts · query: pageNumber*, pageSize* → `CompanyConcept[]` · permiso: Ficha de Empresa / Conceptos
- `GET /api/companies/{companyCode}/concepts/excludedconceptgroups/{groupId}` — Get company excluded concept group · query: pageNumber*, pageSize* → `CompanyConcept[]` · permiso: Ficha de Empresa / Conceptos
- `GET /api/companies/{companyCode}/concepts/excludedconceptgroups` — List company excluded concept groups · query: pageNumber*, pageSize* → `ExcludedConceptGroup[]` · permiso: Ficha de Empresa / Conceptos
- `GET /api/companies/{companyCode}/clauses` — Get a list of clauses for a company · query: pageNumber*, pageSize* → `ClauseResource[]` · permiso: Ficha de Empresa / Características

## Cost centers

- `GET /api/companies/{companyCode}/costcenters` — Get costcenter tree for company → `CostCenterTreeResource` · permiso: Ficha de Empresa / Imputación
- `GET /api/companies/{companyCode}/costcentersraw` — Get raw costcenter tree for company · query: level, parentId, pageNumber*, pageSize* → `CostCenterNode[]` · permiso: Ficha de Empresa / Imputación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/attribution` — Get employee cost attribution data → `AttrResource[]` · permiso: Ficha de Persona / Imputación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/costattribution` — Get pay cost attribution data → `EmployeePayCostAttribution[]` · permiso: Histórico de Cobro / Imputación

## Custom data

- `GET /api/companies/{companyCode}/employees/{employeeCode}/customdata` — List employee custom data templates · query: pageNumber*, pageSize*, filter, orderBy → `CustomDataTemplateDTO` · permiso: Ficha de Persona / Datos Ampliación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/customdata/{templatecode}` — Get employee custom data by templatecode → `object[]` · permiso: Ficha de Persona / Datos Ampliación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/customdata/{templatecode}/historical/{date}` — Get employee historical custom data template values → `object[]` · permiso: Ficha de Persona / Datos Ampliación
- `GET /api/personalisation/maintenence-groups` — List maintenence groups · query: pageSize*, pageNumber* → `MaintenanceGroupModel[]` · permiso: Ampliación
- `GET /api/personalisation/maintenance-groups/{groupId}/templates` — List templates for maintenance group · query: pageSize*, pageNumber* → `TemplateModel[]` · permiso: Ampliación
- `GET /api/personalisation/maintenance-groups/{groupId}/templates/{template}/fields` — List template fields definitions · query: pageSize*, pageNumber* → `TemplateFieldDefinitionModel[]` · permiso: Ampliación
- `GET /api/personalisation/maintenance-groups/{groupid}/templates/{template}/fields/{element}/values` — List available values for template element · query: pageNumber*, pageSize* → `TemplateListValues[]` · permiso: Ampliación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/customdata/{template}/{element}` — Get value stored in an element for an employee → `TemplateFieldDefinitionModel[]` · permiso: Ficha de Persona / Datos Ampliación
- `GET /api/companies/{companyCode}/customdata/{template}/{element}` — Get value stored in an element for a company → `TemplateFieldDefinitionModel[]` · permiso: Ficha de Empresa / Datos Ampliación

## Employee portal

- `GET /api/companies/{companyCode}/employees/{employeeCode}/absenteeisms/holidays/{year}/summary` — Get employee holiday summary → `VacationDaysSumary` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/holidays/{date}` — List holidays percentages by date · query: pageNumber*, pageSize*, filter, orderBy → `HolidaysPercentagesCollectionResource[]` · permiso: Ficha de Empresa
- `GET /api/portal/companies/{companyCode}/requests/vacations/{startDate}/{endDate}` — List holiday requests from employee portal by company · query: pageSize*, pageNumber*, employeeCode, campaignYear, state → `VacationRequestModel[]` · permiso: Solicitudes (Nivel 2)
- `GET /api/portal/companies/{companyCode}/workplaces/{workplaceCode}/requests/vacations/{startDate}/{endDate}` — List holiday requests from employee portal by workplace · query: pageSize*, pageNumber*, employeeCode, campaignYear, state → `VacationRequestModel[]` · permiso: Solicitudes (Nivel 2)
- `GET /api/portals/users` — List users of an employee portal · query: pageSize*, pageNumber*, companyCode, portalCode → `PortalUser` · permiso: Gestión de Portales
- `GET /api/portals` — List employee portals · query: pageSize*, pageNumber*, companyCode → `Portal[]` · permiso: Gestión de Portales

## Employees

- `GET /api/companies/{companyCode}/employees/{employeeCode}/pactedsalary` — Get employee pacted salary → `PactedSalary` · permiso: Ficha de Persona / Retribuciones
- `GET /api/companies/{companyCode}/employees/{employeeCode}/contactdata/professional` — Get employee professional contact data → `ProfessionalContactDataEntityResource` · permiso: Ficha de Persona / Datos personales
- `GET /api/companies/{companyCode}/employees/{employeeCode}/educationlevel` — Get employee education level → `EmployeeEducationLevel` · permiso: Ficha de Persona / Perfil
- `GET /api/companies/{companyCode}/employees/{employeeCode}/contactdata/address` — Get employee address → `AddressEntityResource` · permiso: Ficha de Persona / Datos personales
- `GET /api/companies/{companyCode}/employees` — List employees · query: pageNumber*, pageSize*, filter, orderBy → `EmployeesCollectionResource[]` · permiso: Relación de Trabajadores
- `GET /api/companies/{companyCode}/employees/{employeeCode}/medicalCheckups` — Get employee medical checkup history · query: pageSize*, pageNumber* → `EmployeeMedicalResource[]` · permiso: Ficha de Persona / Gestión
- `GET /api/companies/{companyCode}/employees/{employeeCode}/contactdata/personal` — Get employee personal contact data → `PersonalContactDataEntityResource` · permiso: Ficha de Persona / Datos personales
- `GET /api/companies/{companyCode}/employees/{employeeCode}/identification` — Get employee identification → `IdentificationResource` · permiso: Ficha de Persona / Datos personales
- `GET /api/companies/{companyCode}/workplaces/{workplacecode}/employees/{employeeCode}/sspaymentnumber` — Get workplace social security number for employee → `string:uuid` · permiso: Ficha de Persona / Datos personales
- `GET /api/companies/{companyCode}/employees/{employeeCode}/location` — Get employee location → `LocationResource` · permiso: Ficha de Persona / Datos personales
- `GET /api/companies/{companyCode}/employees/{employeeCode}/formation` — Get employee formation history · query: pageSize*, pageNumber* → `EmployeeFormationResource[]` · permiso: Ficha de Persona / Perfil
- `GET /api/companies/{companyCode}/employees/{employeeCode}/hiringdates` — Get employee hiring dates → `HiringDatesEntityResource` · permiso: Ficha de Persona / Contratación

## Employees - Advances

- `GET /api/companies/{companyCode}/employees/{employeeCode}/advances` — List employee advances → `PayAdvance[]` · permiso: Anticipo Préstamo Embargo
- `GET /api/companies/{companyCode}/employees/{employeeCode}/seizures` — List employee seizures → `PayEmbargo[]` · permiso: Anticipo Préstamo Embargo

## Employees - Agreements

- `GET /api/companies/{companyCode}/employees/{employeeCode}/agreement` — Get employee agreement → `EmployeeAgreement` · permiso: Ficha de Persona / Convenio
- `GET /api/companies/{companyCode}/employees/{employeeCode}/subClassifications` — Get employee subclassifications → `EmployeeSubClassification[]` · permiso: Ficha de Persona / Convenio

## Employees - Bank accounts

- `GET /api/companies/{companyCode}/employees/{employeeCode}/bankaccount/{bankaccountcode}` — Get employee main bank account → `BankAccountsResource` · permiso: Ficha de Persona / Formas de Cobro
- `GET /api/companies/{companyCode}/employees/{employeeCode}/company-bankaccount` — Get company bank account for employee → `EmployeeCompanyBankAccountResource` · permiso: Ficha de Persona / Formas de Cobro
- `GET /api/companies/{companyCode}/employees/{employeeCode}/bankaccounts` — List employee bank accounts → `EmployeeBankAccountCodeModel` · permiso: Ficha de Persona / Formas de Cobro
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pay-bank-account` — Get employeer pay bank account → `PayBankAccountResource` · permiso: Ficha de Persona / Formas de Cobro

## Employees - Contracts

- `GET /api/companies/{companyCode}/employees/{employeeCode}/remoteworkagreement` — Get employee remote work agreement → `RemoteWorkAgreement` · permiso: Ficha de Persona / Contratación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/contract-agreement` — Get employee contract agreement → `EmployeeContractAgreement` · permiso: Ficha de Persona / Contratación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/contract-history` — List employee contracts history · query: pageSize*, pageNumber* → `EmployeeContractHistoryResource` · permiso: Ficha de Persona / Contratación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/affiliationdata` — Get employee affiliation data → `EmployeeAffiliationDataGet` · permiso: Ficha de Persona / Contratación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/contract/timetable` — Get employee contract timetable → `TimeTable` · permiso: Ficha de Persona / Contratación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/contrata/clauses` — List employee contrat@ contract clauses for basic copy → `EmployeeClauseResource[]` · permiso: Ficha de Persona / Contratación

## Employees - IRPF

- `GET /api/companies/{companyCode}/employees/{employeeCode}/irpfdata` — Get employee IRPF data → `EmployeeIRPFDataModel` · permiso: Ficha de Persona / Tributación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/irpfdata/calculated` — Get employee calculated actual IRPF Data → `IRPFCalcuation` · permiso: Ficha de Persona / Tributación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/irpfdata/descendants` — List employee IRPF descendants → `EmployeeIRPFDataDescendantModelWithId[]` · permiso: Ficha de Persona / Tributación
- `GET /api/companies/{companyCode}/employees/{employeeCode}/irpfdata/ascendants` — List employee IRPF ascendants → `EmployeeIRPFDataAscendantModelWithId[]` · permiso: Ficha de Persona / Tributación

## Employees - Job position

- `GET /api/companies/{companyCode}/available-jobpositions` — List available positions in company → `AvailableJobPositionModel[]` · permiso: Ficha de Empresa / Convenios y Pactos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/jobPositionInformation` — Get employee job position · query: index, includeEnded → `EmployeePositionDetails` · permiso: Ficha de Persona / Convenio
- `GET /api/companies/{companyCode}/employees/{employeeCode}/jobPositionHistory` — List employee job position history → `EmployeeJobHistory` · permiso: Ficha de Persona / Convenio
- `GET /api/companies/{companyCode}/employees/{employeeCode}/jobtitle` — Get employee jobtitle → `JobTitleEntityResource` · permiso: Ficha de Persona / Convenio
- `GET /api/companies/{companyCode}/jobTitles` — List job titles in company · query: pageNumber*, pageSize* → `JobTitle[]`

## Employees - Labor life

- `GET /api/companies/{companyCode}/employees/{employeeCode}/labourLife` — List employee laborlife → `EmployeeLaborLife` · permiso: Ficha de Persona / Vida laboral
- `GET /api/companies/{companyCode}/employees/{employeeCode}/labourLife/{laborlifeid}` — Get employee laborlife → `EmployeeLaborLifeDetail` · permiso: Ficha de Persona / Vida laboral

## Employees - Remuneration

- `GET /api/companies/{companyCode}/employees/{employeeCode}/concepts` — List employee pay concepts · query: pageNumber*, pageSize* → `EmployeeConceptInfoListModel[]` · permiso: Ficha de Persona / Retribuciones
- `GET /api/companies/{companyCode}/employees/{employeeCode}/concepts/{conceptcode}` — Get employee pay concept · query: pageNumber*, pageSize* → `EmployeeConceptInfoModelL1[]` · permiso: Ficha de Persona / Retribuciones
- `GET /api/companies/{companyCode}/employees/{employeeCode}/incentives` — List employee incentives → `EmployeeIncentive[]` · permiso: Ficha de Persona / Retribuciones
- `GET /api/companies/{companyCode}/employees/{employeeCode}/sanctions` — List employee sanctions → `EmployeeSanction[]` · permiso: Ficha de Persona / Retribuciones

## Employees - Salary

- `GET /api/companies/{companyCode}/employees/{employeeCode}/salaryadjustments` — Get employee agreed salary → `AgreedSalary` · permiso: Ficha de Persona / Retribuciones
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/theoretical-gross` — Get employee theoretical gross → `TheoreticalGross[]` · permiso: Ficha de Persona / Retribuciones
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/extrapayments` — Get employee extra payments → `ExtraPayment[]` · permiso: Ficha de Persona / Retribuciones

## Employees - Unemployments

- `GET /api/companies/{companyCode}/employees/{employeeCode}/unemployments` — List employee unemployments → `UnemploymentDigestResource[]` · permiso: Regulación de Empleo
- `GET /api/companies/{companyCode}/employees/{employeeCode}/unemployments/{unemploymentId}` — Get employee unemployment → `UnemploymentResource` · permiso: Regulación de Empleo
- `GET /api/companies/{companyCode}/unemployments/{startDate}/{endDate}` — List unemployments by period · query: pageNumber*, pageSize* → `UnemploymentDigestResource[]` · permiso: Regulación de Empleo
- `GET /api/companies/{companyCode}/workplaces/{workplacecode}/unemployments/{startDate}/{endDate}` — List unemployments by period for workplace · query: pageNumber*, pageSize* → `UnemploymentDigestResource[]` · permiso: Regulación de Empleo

## Pays

- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays` — List employee pays · query: pageNumber*, pageSize*, startDate, endDate, payTypeId, workplaceCode → `PayModel[]` · permiso: Histórico de Cobro
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/paySubclassifications` — Get pay sub-classifications · query: pageNumber*, pageSize* → `PaySubClassificationsModel[]` · permiso: Histórico de Cobro / Datos Trabajador
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/bonifications` — Get pay bonifications → `PayBonificationsModel[]` · permiso: Histórico de Cobro / Bases e Importes
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/arrestimports` — Get pay arrest imports · query: pageNumber*, pageSize* → `ReturnArrestImports` · permiso: Histórico de Cobro / Anticipos, Préstamos y Embargos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/accrueds` — Get pay accrueds → `PayAccrueds[]` · permiso: Histórico de Cobro / Período
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/accrueds-report` — Get pay accrueds report → `PayAccrualInfo[]` · permiso: Histórico de Cobro / Período
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/paydata` — Get pay data → `EmployeePayData[]` · permiso: Histórico de Cobro / Datos Trabajador
- `GET /api/companies/{companyCode}/pays/{year}/{month}` — List company pays by month · query: pageNumber*, pageSize*, workplaceCode, payTypeId → `CompanyPayData[]` · permiso: Histórico de Cobro
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/daysinfo` — Get pay days info → `HistoricPayDaysInfoResource[]` · permiso: Histórico de Cobro / Período

## Pays - Concepts

- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/concepts` — List pay concepts · query: pageNumber*, pageSize* → `PayConceptsModel[]` · permiso: Histórico de Cobro / Nómina
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/calculatedinternalconcepts` — List pay internal calculated concepts · query: pageNumber*, pageSize* → `CalculatedInternalConceptsModel[]` · permiso: Histórico de Cobro / Nómina
- `GET /api/companies/{companyCode}/employees/{employeeCode}/pays/{payid}/calculatedinternalconcepts/{internalconceptcodes}` — List pay internal calculated concepts filtered · query: pageNumber*, pageSize* → `CalculatedInternalConceptsModel[]` · permiso: Histórico de Cobro / Nómina

## Professionals

- `GET /api/companies/{companyCode}/employees/{employeeCode}/professionalIRPFData/{periodStart}/{periodEnd}` — Get professional IRPF data history → `DtoIRPFPeriodReturn[]` · permiso: Ficha de Persona / Bases IRPF
- `GET /api/companies/{companyCode}/employees/{employeeCode}/professionalIRPFData` — Get professional IRPF data → `DtoIRPFData` · permiso: Ficha de Persona / Tributación

## Security

- `GET /api/security/{userId}/allowed-companies` — List allowed companies for user · query: pageSize*, pageNumber* → `KeyValuePairInt32String[]` · permiso: Mantenimiento de Usuarios
- `GET /api/security/{userId}/allowed-companies/{companyCode}/allowed-workplaces` — List allowed workplaces for user · query: pageSize*, pageNumber* → `TemplateModel[]` · permiso: Mantenimiento de Usuarios

## Temporary Disabilities (IT)

- `GET /api/companies/{companyCode}/temporarydisabilities/{year}/{month}` — List temporary disabilities by company · query: pageSize*, pageNumber*, lastUpdate → `TemporaryDisability[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/workplaces/{workplacecode}/temporarydisabilities/{year}/{month}` — List temporary disabilities by workplace · query: pageSize*, pageNumber*, lastUpdate → `TemporaryDisability[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporaryDisabilities/{year}` — List temporary disabilities by employee → `TemporaryDisability[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporaryDisabilities/detail/{temporarydisabilityID}` — Get temporary disability → `TDDetail` · permiso: IT y Absentismos

## Temporary Disabilities (IT) - Accidents

- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/accidents` — List IT accidents · query: pageNumber*, pageSize*, filter, orderBy → `AccidentsCollectionResource[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/accidents/{accidentid}` — Get IT accident → `AccidentsResource` · permiso: IT y Absentismos

## Temporary Disabilities (IT) - Birth permits

- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/birthpermits` — List IT birth permits · query: pageNumber*, pageSize*, filter, orderBy → `BirthPermitsCollectionResource[]` · permiso: IT y Absentismos

## Temporary Disabilities (IT) - Illnesses

- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/illnesses/{illnessid}` — Get IT Illness → `IllnessesResource` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/illnesses` — List IT Illnesses · query: pageNumber*, pageSize*, filter, orderBy → `IllnessesCollectionResource[]` · permiso: IT y Absentismos

## Temporary Disabilities (IT) - Non work accidents

- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/nonworkaccidents` — List IT non work accidents · query: pageNumber*, pageSize*, filter, orderBy → `NonWorkAccidentsCollectionResource[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/nonworkaccidents/{nonworkaccidentID}` — Get IT non work accident → `NonWorkAccidentsResource` · permiso: IT y Absentismos

## Temporary Disabilities (IT) - Partial birth permits

- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/partialbirthpermits/{partialBirthPermitId}` — Get IT partial birth permit → `PartialBirthPermitGetEntity` · permiso: IT y Absentismos

## Temporary Disabilities (IT) - Pregnancy Risks

- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/pregnancyrisks` — List IT pregnancy risk · query: pageNumber*, pageSize*, filter, orderBy → `PregnancyRisksCollectionResource[]`

## Temporary Disabilities (IT) - Professional Illnesses

- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/professionalillnesses` — List IT professional Illnesses · query: pageNumber*, pageSize*, filter, orderBy → `ProfessionalIllnessesCollectionResource[]` · permiso: IT y Absentismos
- `GET /api/companies/{companyCode}/employees/{employeeCode}/temporarydisabilities/professionalillnesses/{professionalIllnessId}` — Get IT professional illness → `ProfessionalIllnessesResource` · permiso: IT y Absentismos

## Training

- `GET /api/training/centers/{centerCode}/years/{year}/groups` — List training groups · query: pageNumber*, pageSize* → `TrainingGroupDigestResource` · permiso: Centros de Formación
- `GET /api/training/centers` — List training centers · query: pageNumber*, pageSize* → `TrainingCenterDigestResource` · permiso: Centros de Formación
- `GET /api/training/centers/{centerCode}/years/{year}/groups/{groupCode}` — Get training group → `TrainingGroupResource` · permiso: Centros de Formación
- `GET /api/training/centers/{centerCode}/years/{year}/groups/{groupCode}/participants` — List participants for a training group · query: pageNumber*, pageSize* → `TrainingGroupParticitpantDigestResource` · permiso: Centros de Formación
- `GET /api/training/centers/{centerCode}/years/{year}/groups/{groupCode}/participants/{companyCode}/{workplaceCode}/{employeeCode}` — Get training group participant → `TrainingGroupParticitpantResource` · permiso: Centros de Formación
- `GET /api/training/centers/{centerCode}/years/{year}/groups/{groupCode}/actions` — List training group actions · query: pageNumber*, pageSize* → `TrainingActionDigestResource` · permiso: Centros de Formación
- `GET /api/training/centers/{centerCode}/years/{year}/groups/{groupCode}/actions/{actionCode}` — Get training group action → `TrainingActionResource` · permiso: Centros de Formación
- `GET /api/training/centers/{centerCode}` — Get training center → `TrainingCenterResource` · permiso: Centros de Formación
- `GET /api/training/centers/{centerCode}/years` — List years of operation for training center → `integer` · permiso: Centros de Formación
- `GET /api/training/groups/{year}` — List training groups by year · query: pageNumber*, pageSize* → `TrainingGroupForYear`
- `GET /api/training/groups/{groupId}/participants` — List participants for a training group · query: pageNumber*, pageSize* → `TrainingGroupParticipantById`

## Variable concepts

- `GET /api/companies/{companyCode}/employees/{employeeCode}/variableconcepts/{variableconceptcode}` — Get employee variable concept · query: pageSize*, pageNumber*, startDate → `VariableConceptsResource[]` · permiso: Conceptos Variables
- `GET /api/companies/{companyCode}/employees/{employeeCode}/variableconcepts/{startDate}/{endDate}` — List employee variable concepts · query: pageSize*, pageNumber* → `VariableConceptsResource[]` · permiso: Conceptos Variables

## Workplaces

- `GET /api/companies/{companyCode}/workplaces` — List workplaces · query: pageNumber*, pageSize*, filter, orderBy → `CompanyWorkplacesCollectionResource[]` · permiso: Listado de Centros
- `GET /api/companies/{companyCode}/workplaces/{workplacecode}/contactdata/address` — Get workplace address → `CompanyWorkplacesAddressEntityResource` · permiso: Ficha de Empresa / Centros de Trabajo
- `GET /api/companies/{companyCode}/workplaces/{workplacecode}/sspaymentnumbers` — List workplace Social Security numbers → `string:uuid` · permiso: Ficha de Empresa / Cotización
- `GET /api/companies/{companyCode}/workplaces/{workplacecode}/sspaymentnumbers/{sspaymentnumberid}` — Get workplace Social Security number → `CCCDetails` · permiso: Ficha de Empresa / Cotización
- `GET /api/companies/{companyCode}/workplaces/{companyWorkplaceCode}/bankaccounts` — List workplace bank accounts → `WorkplaceBankAccountCodeModel[]` · permiso: Ficha de Empresa / Formas de pago
- `GET /api/companies/{companyCode}/workplaces/{companyWorkplaceCode}/bankaccounts/{bankAccountCode}` — Get workplace bank account → `WorkplaceBankAccountModel` · permiso: Ficha de Empresa / Formas de pago
- `GET /api/companies/{companyCode}/workplaces/{workplacecode}/datacontact` — Get workplace data contact → `CompanyWorkplacesDataContactResource` · permiso: Ficha de Empresa / Centros de Trabajo
