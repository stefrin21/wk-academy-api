# API a3innuva Nómina · los campos de las respuestas

Un apartado por tipo de respuesta, con sus campos y su tipo. ⚠️ Los campos con datos de personas (nombre, DNI, NAF, importes de una persona) **no se enseñan nunca**: solo se usan para sumar o contar.

## Absenteeism

- `absenteeismID` (string:uuid)
- `typeOfItAbsenteeism` (string)
- `employeeID` (string:uuid)
- `employeeCode` (string)
- `companyCode` (string)
- `companyWorkplaceCode` (integer)
- `itAbsenteeismWorkPlaceCode` (integer)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `canceledAbsenteeismID` (boolean)
- `description` (string)
- `percentageDayAbsenteeisms` (number:double)
- `absenteeismModeTypeID` (string)
- `absenteeismModeType` (string)
- `contingencyDescription` (string)
- `securityProfileID` (integer)
- `lastUpdate` (string:date-time)

## AbsenteeismDetail

- `absenteesmID` (string:uuid)
- `typeOfItAbsenteeism` (string)
- `employeeID` (string:uuid)
- `employeeCode` (string)
- `companyWorkplaceCode` (integer)
- `itAbsenteeismWorkPlaceCode` (integer)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `canceledAbsenteeismID` (boolean)
- `description` (string)
- `percentageDayAbsenteeisms` (number:double)
- `absenteeismModeType` (string)
- `contingencyDescription` (string)
- `securityProfileID` (integer)
- `forcedDescription` (string)
- `indDiscountRestsWeekly` (boolean)
- `indDiscountNaturalDays` (boolean)
- `lastUpdate` (string:date-time)
- `absenteeismTypeId` (string)
- `holiday` (Holiday)
- `unjustified` (Unjustified)
- `retributed` (Retributed)
- `indLessThanOneDay` (boolean)
- `durationHours` (integer)
- `durationMinuts` (integer)

## AbsenteeismStrikeGetModel

- `isLessThanOneDay` (boolean)
- `duration` (integer)
- `absenteeismID` (string)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `employeeID` (string)
- `companyCode` (integer)
- `employeeCode` (string)
- `isDiscountRestsWeekly` (boolean)
- `isDiscountNaturalDays` (boolean)
- `payslipText` (string)
- `lastUpdate` (string:date-time)

## AccidentsCollectionResource

- `accidentId` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `lastUpdate` (string:date-time)

## AccidentsResource

- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `benefitTypeID` (string)
- `indComplement` (boolean)

## AccountingLinkGroupResource

- `acountingLinkGroupID` (string:uuid)
- `groupDescription` (string)

## AddressEntityResource

- `acronym` (string)
- `streetName` (string)
- `buildingNumber` (string)
- `stairWell` (string)
- `floor` (string)
- `gate` (string)
- `town` (string)
- `country` (string)
- `postalCode` (string)
- `municipalityCode` (string)

## AddressTypeResource

- `addressTypeID` (integer)
- `description` (string)

## AgreedSalary

- `amount` (number:double)
- `liquidationType` (string)
- `excess` (AgreedSalaryExcess)
- `extraPayments` (AgreedSalaryExtraPays)
- `excludedConcepts` (AgreedSalaryExcludedConcepts)
- `taxationQuote` (AgreedSalaryTaxationQuote)
- `indicators` (Indicators)

## AgreedSalaryExcess

- `distribution` (ConceptDistribution[])
- `vacationsCollection` (boolean)

## AgreedSalaryExcludedConcepts

- `excludedConceptGroupID` (string:uuid)
- `concept` (ExcludedConcept[])

## AgreedSalaryExtraPay

- `extraPayId` (string:uuid)
- `extraPay` (string)

## AgreedSalaryExtraPays

- `extraPayment` (AgreedSalaryExtraPay[])

## AgreedSalaryTaxationQuote

- `quotesCC` (boolean)
- `quotesPC` (boolean)
- `paysIRPFTax` (boolean)

## AgreementClassificationModel

- `classificationID` (string:uuid)
- `classificationCode` (integer)
- `subClassificationCode` (integer)
- `classificationDescription` (string)
- `revision` (integer)

## AgreementITComplementResource

- `groupID` (string:uuid)
- `description` (string)
- `startDay` (integer)
- `endDay` (integer)
- `percentage` (number:double)
- `complementTypeID` (integer)
- `complementTypeDescription` (string)

## AgreementLookupResource

- `agreementCode` (string)
- `description` (string)
- `endValidityDate` (string:date-time)
- `field` (string)
- `holidaysDaysNumber` (integer)
- `holidaysDaysType` (string)
- `revision` (integer)
- `startValidityDate` (string:date-time)
- `workingHours` (integer)

## AgreementModel

- `agreementID` (string:uuid)
- `description` (string)
- `endDate` (string:date-time)
- `startDate` (string:date-time)
- `holidaysDaysNumber` (integer)
- `holidaysDaysType` (string)
- `workingHours` (integer)
- `revision` (integer)

## AgreementRetributedPermissionTypeModel

- `revision` (string)
- `startValidityDate` (string:date-time)
- `endValiditydate` (string:date-time)
- `leaveId` (integer)
- `leaveDescription` (string)
- `days` (integer)
- `annualHours` (string)
- `annualRepetitions` (string)
- `agreementType` (string)

## AgreementSeniorityGroupLookupResource

- `groupID` (string:uuid)
- `description` (string)
- `seniorityCollectionTypeID` (integer)
- `formulaID` (integer)
- `consolidationDate` (string:date-time)

## AgreementSeniorityGroupResource

- `groupID` (string:uuid)
- `description` (string)
- `seniorityCollectionTypeID` (integer)
- `formulaID` (integer)
- `consolidationDate` (string:date-time)
- `indMonthlyPayCollection` (boolean)
- `indVacationsCollection` (boolean)
- `indQuotesCC` (boolean)
- `indQuotesPC` (boolean)
- `indPaysIRPFTax` (boolean)
- `indTDAccident` (boolean)
- `indTDIllness` (boolean)
- `indTDMaternity` (boolean)
- `indTDPregnancyRisk` (boolean)
- `indAbsenteeism` (boolean)
- `indSuspension` (boolean)
- `indPartialTime` (boolean)
- `indPartialUnemployment` (boolean)
- `indStrike` (boolean)
- `indEnrolmentDrop` (boolean)
- `indHolidays` (boolean)
- `indAgreementArrears` (boolean)
- `indSeniorityChange` (integer)
- `indInactivityPeriods` (boolean)

## AttrResource

- `costAttributionNodeCode` (string)
- `percentageAttribution` (number:double)
- `description` (string)

## AvailableJobPositionModel

- `jobCode` (string)
- `jobDescription` (string)

## BankAccountsResource

- `entity` (string)
- `agency` (string)
- `digitControl` (string)
- `account` (string)
- `iban` (string)
- `holder` (string)
- `isMainAccount` (boolean)
- `distributionAmount` (number:double)
- `distributionPercentage` (number:double)
- `bic` (string)
- `conceptCode` (integer)
- `conceptDescription` (string)

## BirthPermitsCollectionResource

- `birthPermitID` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `incidentTypeID` (string)
- `lastUpdate` (string:date-time)

## CCCDetails

- `workPlaceName` (string)
- `ssPaymentNumber` (string)
- `indFormation` (integer)
- `activityID` (string)
- `activityDescription` (string)
- `activityID93` (string)
- `activityDescription93` (string)
- `regimeTypeID` (string)
- `regimeTypeIDDescription` (string)
- `redRegimeID` (string)

## CalculatedInternalConceptsModel

- `indPayrollSheet` (boolean)
- `indDeduction` (boolean)
- `indForcedConcept` (boolean)
- `indPaysIRPFTax` (boolean)
- `indQuotesCC` (boolean)
- `indQuotesPC` (boolean)
- `internalConceptID` (integer)
- `longDescription` (string)
- `shortDescription` (string)
- `calculatedAmount` (number:double)
- `calculatedPercentage` (number:double)
- `calculatedUnits` (number:double)
- `compensationDeductionID` (integer)
- `craID` (integer)
- `isDiscount` (boolean)

## CalendarDay

- `date` (string:date-time)
- `hours` (number:double)
- `percentage` (number:double)
- `dayType` (string)
- `workDayType` (string)
- `blocked` (boolean)
- `calendar` (string)

## CalendarDayTypeModel

- `dayTypeID` (integer)
- `description` (string)

## CalendarWorkDayPercentage

- `lastWorkDayTypeSelected` (integer)
- `lastWorkDayPercentage` (number:double)
- `lastWorkDayHours` (number:double)
- `lastWorkDayTypeSelectedDescription` (string)

## CalendarWorkDayTypeModel

- `workDayTypeID` (integer)
- `description` (string)

## ClassificationEntityResource

- `classificationID` (string:uuid)
- `classificationCode` (string)
- `classificationDescription` (string)

## ClauseResource

- `clauseID` (string:uuid)
- `clauseDescription` (string)
- `clauseText` (string)

## CollectiveType

- `id` (string)
- `description` (string)

## CompaniesCollectionResource

- `companyCode` (integer)
- `companyName` (string)
- `identifierNumber` (string)
- `lastUpdate` (string:date-time)

## CompanyConcept

- `conceptCode` (integer)
- `description` (string)
- `conceptType` (string)

## CompanyPayData

- `payDate` (string:date-time)
- `payID` (string:uuid)
- `payType` (string)
- `payTypeID` (integer)
- `periodEndDate` (string:date-time)
- `periodStartDate` (string:date-time)
- `accruedStartDate` (string:date-time)
- `accruedEndDate` (string:date-time)
- `workplaceCode` (string)
- `workplaceName` (string)
- `employeeId` (string:uuid)
- `employeeCode` (string)
- `completeName` (string)
- `identifierNumber` (string)
- `baseCC` (number:double)
- `baseAC` (number:double)
- `prorratedExtraPay` (number:double)
- `totalBaseIRPF` (number:double)
- `totalDeduction` (number:double)
- `totalGross` (number:double)
- `totalRemuneration` (number:double)
- `costBusiness` (number:double)
- `systemDate` (string:date-time)
- `payLocked` (boolean)
- `indPublication` (boolean)
- `hasMailTo` (boolean)

## CompanyWorkplaceCalendarModel

- `date` (string:date-time)
- `dayTypeID` (integer)
- `dayType` (string)
- `workDayTypeID` (integer)
- `workDayType` (string)

## CompanyWorkplacesAddressEntityResource

- `acronym` (string)
- `streetName` (string)
- `buildingNumber` (string)
- `stairWell` (string)
- `floor` (string)
- `gate` (string)
- `city` (string)
- `region` (string)
- `postalCode` (string)

## CompanyWorkplacesCollectionResource

- `companyNumberCode` (integer)
- `companyworkplaceId` (string:uuid)
- `workplaceCode` (integer)
- `workplaceName` (string)

## CompanyWorkplacesDataContactResource

- `phonenumber1` (string)
- `phonenumber2` (string)
- `extension1` (string)
- `extension2` (string)
- `fax` (string)
- `email1` (string)
- `email2` (string)

## ConceptCollectionType

- `conceptCollectionTypeID` (integer)
- `description` (string)

## ConceptDistribution

- `conceptCode` (integer)
- `concept` (string)
- `percentage` (number:double)

## ContractType

- `contractCode` (integer)
- `description` (string)

## ContributionTypeResource

- `id` (integer)
- `description` (string)

## ControlSpecies

- `remunerationInKindPercentage` (number:double)
- `totaRemuneration` (number:double)
- `monetaryCompensation` (number:double)
- `benefitsInKind` (number:double)
- `estimatedSMI` (number:double)

## CostCenterNode

- `id` (string:uuid)
- `parentID` (string:uuid)
- `description` (string)
- `attributionCode` (string)
- `level` (integer)
- `accountingLink` (string)
- `code` (string)

## CostCenterTreeNodeResource

- `children` (CostCenterTreeNodeResource[])
- `costAttributionNodeID` (string:uuid)
- `costAttributionTreeID` (string:uuid)
- `costAttributionFatherNodeID` (string:uuid)
- `description` (string)
- `costAttributionNodeCode` (string)
- `level` (integer)
- `codeAccountingLink` (string)
- `levelAttributionCode1` (string)
- `levelAttributionCode2` (string)
- `levelAttributionCode3` (string)
- `levelAttributionCode4` (string)
- `levelAttributionCode5` (string)

## CostCenterTreeResource

- `costAttributionTreeID` (string:uuid)
- `companyID` (string:uuid)
- `tableTypeID` (integer)
- `description` (string)
- `automatic` (boolean)
- `levelAttributionLength1` (integer)
- `levelAttributionLength2` (integer)
- `levelAttributionLength3` (integer)
- `levelAttributionLength4` (integer)
- `levelAttributionLength5` (integer)
- `showImputationCode` (boolean)
- `showImputationEC` (boolean)
- `showLevel` (boolean)
- `companyCostAttributionTreeID` (string:uuid)
- `costCenters` (CostCenterTreeNodeResource[])

## CountriesCollectionResource

- `isoCountryID` (integer)
- `name` (string)

## CustomDataTemplateDTO

- `templateCode` (integer)
- `templateName` (string)
- `templateType` (string)

## DismissalTypeResource

- `dismissalTypeID` (integer)
- `description` (string)
- `dropCode` (string)
- `inemDropCode` (integer)
- `dropTypeDescription` (string)

## DtoIRPFData

- `perceptionTypeCode` (string)
- `perceptionSubTypeCode` (integer)
- `withholdingPercentage` (number:double)

## DtoIRPFPeriodReturn

- `perceptionTypeCode` (string)
- `perceptionSubTypeCode` (integer)
- `periodIRPFYear` (integer)
- `periodIRPFMonth` (integer)
- `baseIRPF` (number:double)
- `amountIRPF` (number:double)

## EmployeeAffiliationDataGet

- `specialContract` (string)
- `employeeCollective` (string)
- `sustitutionCause` (string)
- `sustitutionEmployee` (string)
- `specialContractID` (integer)
- `employeeCollectiveID` (integer)
- `sustitutionCauseID` (string)
- `sustitutionEmployeeID` (string:uuid)
- `sustitutionEmployeeNAFPrefix` (integer)
- `sustitutionEmployeeNAF` (integer)
- `sustitutionEmployeeNAFSuffix` (integer)

## EmployeeAgreement

- `agreementID` (string:uuid)
- `agreementCode` (string)
- `agreementDescription` (string)
- `classificationID` (string:uuid)
- `classificationCode` (string)
- `subClassificationCode` (string)
- `classificationDescription` (string)
- `revision` (integer)

## EmployeeBankAccountCodeModel

- `bankAccountCode` (string:uuid)
- `isMainAccount` (boolean)

## EmployeeClauseResource

- `clauseID` (string:uuid)
- `clauseDescription` (string)
- `clauseText` (string)
- `indCompanyClause` (boolean)

## EmployeeCompanyBankAccountResource

- `entity` (string)
- `agency` (string)
- `digitControl` (string)
- `account` (string)
- `iban` (string)
- `holder` (string)
- `isMainAccount` (boolean)
- `distributionAmount` (number:double)
- `distributionPercentage` (number:double)
- `bic` (string)
- `conceptCode` (integer)
- `conceptDescription` (string)
- `indChequeCollection` (boolean): Gets or sets a value indicating whether cheque collection is enabled.
- `indCheque` (boolean): Gets or sets a value indicating whether cheque payment is enabled.
- `indChequeMonthlyPays` (boolean): Gets or sets a value indicating whether cheques are used for monthly pays.
- `indChequeExtraPays` (boolean): Gets or sets a value indicating whether cheques are used for extra pays.
- `indChequeArrearPays` (boolean): Gets or sets a value indicating whether cheques are used for arrear pays.
- `indChequeSettlementPays` (boolean): Gets or sets a value indicating whether cheques are used for settlement pays.
- `indChequeDifferencesPays` (boolean): Gets or sets a value indicating whether cheques are used for differences pays.
- `indChequeExpensesNotesPays` (boolean): Gets or sets a value indicating whether cheques are used for expenses notes pays.
- `indChequeSettlementMonthlyPays` (boolean): Gets or sets a value indicating whether cheques are used for settlement monthly pays.
- `indChequeAdvancePays` (boolean): Gets or sets a value indicating whether cheques are used for advance pays.

## EmployeeConceptInfoListModel

- `conceptCode` (integer)
- `description` (string)
- `amount` (number:double)
- `conceptType` (string)
- `inKind` (boolean)
- `manual` (boolean)
- `conceptCollectionTypeID` (integer)
- `conceptCollectionTypeDesc` (string)

## EmployeeConceptInfoModelL1

- `conceptCode` (integer)
- `description` (string)
- `amount` (number:double)
- `conceptType` (string)
- `inKind` (boolean)
- `conceptCollectionTypeID` (integer)
- `conceptCollectionTypeDesc` (string)
- `indAbsenteeism` (boolean)
- `indAutonomousSS` (boolean)
- `indCollectionDiscount` (boolean)
- `indEnrolmentDrop` (boolean)
- `indExtraHours` (integer)
- `indExtraPayCollection` (boolean)
- `indForceFactor` (boolean)
- `indHoliDays` (boolean)
- `indInactivityPeriods` (boolean)
- `indIncentive` (boolean)
- `indInKindCompensation` (integer)
- `indIRPFNotSubject` (boolean)
- `indIrregular` (boolean)
- `indLaborUnionQuote` (boolean)
- `indModified` (boolean)
- `indMonthlyPayCollection` (boolean)
- `indMutualityContribution` (integer)
- `indMutualityReduction` (boolean)
- `indNotClassificationFactor` (boolean)
- `indOnAccountConcept` (boolean)
- `indOrphanSchoolContribution` (boolean)
- `indOtherFreeIncome` (boolean)
- `indPaidLeave` (boolean)
- `indPartialExemption` (boolean)
- `indPartialTime` (boolean)
- `indPartialUnemployment` (boolean)
- `indPayrollSheet` (boolean)
- `indPaysIRPFTax` (boolean)
- `indPensionPlans` (integer)
- `indPensionReduction` (boolean)
- `indQuotesCC` (boolean)
- `indQuotesPC` (boolean)
- `indShowOnPayrollSheet` (boolean)
- `indStrike` (boolean)
- `indSuspension` (boolean)
- `indTDAccident` (boolean)
- `indTDIllness` (boolean)
- `indTDMaternity` (boolean)
- `indTDPregnancyRisk` (boolean)
- `indUnitaryAmount` (boolean)
- `indUnpaidLeave` (boolean)
- `indVacationsCollection` (boolean)

## EmployeeContractAgreement

- `contractCode` (string)
- `contractDescription` (string)
- `labourPeriodStartDate` (string:date-time)
- `labourPeriodEndDate` (string:date-time)
- `contributionTypeID` (integer)
- `contributionType` (string)
- `contributionModalityType` (string)
- `cnoOccupationID` (string)
- `indDeterminedDuration7days` (integer)
- `contributionAgrarianMode` (integer)
- `testPeriod` (integer)
- `indTestDaysType` (integer)
- `noticeDays` (integer)
- `workReason` (string)
- `citricRegimeContribution` (integer)
- `citricRegimePermanenceCoefficient` (integer)
- `jobPosition` (string)
- `annualGrossText` (string)
- `annualGrossAmount` (number:double)
- `ocupationTGSSID` (string)
- `collectionTypeID` (integer)
- `collectionType` (string)

## EmployeeContractHistoryResource

- `contractCode` (integer)
- `contractDescription` (string)
- `affiliationDescription` (string)
- `startDate` (string:date-time)
- `fileContractName` (string)
- `indEmptyContractText` (boolean)
- `endDate` (string:date-time)
- `indOralContract` (boolean)
- `publishedA3Doc` (boolean)
- `publishedPortal` (boolean)
- `a3DocDocumentId` (integer)

## EmployeeEducationLevel

- `educationLevelID` (integer)

## EmployeeFormationResource

- `reserve` (boolean)
- `comments` (string)
- `test_Comments` (string)
- `totalPresent` (integer)
- `totalAbsent` (integer)
- `personalCosts_ManualAutomatic` (string)
- `personalCosts_Cost` (string)
- `personalCosts_LabourHours` (string)
- `personalCosts_HourCost` (string)
- `retires` (integer)
- `priorityEmployee` (boolean)
- `discapacity` (boolean)
- `functionalAreaId` (integer)
- `profCategoryId` (integer)
- `studiesLevelId` (integer)
- `otherTitles` (string)
- `functionalAreaDescription` (string)
- `profCategoryDescription` (string)
- `studiesLevelDescription` (string)
- `called_Done` (boolean)
- `other_Done` (boolean)
- `cancelation` (boolean)
- `modification` (boolean)
- `other_Notices` (boolean)
- `called_Date` (string:date-time)
- `cancelation_Date` (string:date-time)
- `modification_Date` (string:date-time)
- `other_Notices_Date` (string:date-time)
- `invitationMeans` (string)
- `cancelation_Media` (string)
- `modification_Media` (string)
- `other_Notices_Media` (string)
- `called_Comments` (string)
- `cancelation_Comments` (string)
- `modification_Comments` (string)
- `other_Notices_Comments` (string)
- `certificate_Done` (boolean)
- `achievement_Certificate` (boolean)
- `certificate_Date` (string:date-time)
- `achievement_Certificate_Date` (string:date-time)
- `other_Certificate_Date` (string:date-time)
- `att_Certificate_Media` (string)
- `achievement_Certificate_Media` (string)
- `other_Certificate_Media` (string)
- `certificate_Comments` (string)
- `achievement_Certificate_Comments` (string)
- `other_Certificate_Comments` (string)
- `presence` (string)
- `called_NotificationType` (string)
- `userId` (string)
- `test_Done` (boolean)
- `test_Date` (string:date-time)
- `niss` (string)
- `classificationDescription` (string)
- `contributionTypeDescription` (string)
- `regimeDescription` (string)
- `genderViolenceVictim` (boolean)
- `terrorismVictim` (boolean)
- `phoneNumber` (string)
- `hasAccreditingDiploma` (boolean)

## EmployeeIRPFDataAscendantModelWithId

- `irpfAscendantID` (string:uuid)
- `descendantsLivingWith` (integer)
- `disabilityPercentage` (number:double)
- `birthDate` (integer)
- `leaveDate` (string:date-time)
- `withHelp` (boolean)
- `order` (integer)

## EmployeeIRPFDataDescendantModelWithId

- `irpfDescendantID` (string:uuid)
- `birthDate` (integer)
- `deductionPercentage` (integer)
- `disabilityPercentage` (number:double)
- `leaveDate` (string:date-time)
- `withHelp` (boolean)
- `welcome` (boolean)
- `welcomeDate` (integer)
- `order` (integer)

## EmployeeIRPFDataModel

- `pensionPlan` (number:double)
- `detractions` (number:double)
- `spousePension` (number:double)
- `foodAnnualAllowance` (number:double)
- `perceptionTypeCode` (string)
- `subPerceptionKey` (integer)
- `withholdingPercentage` (number:double)
- `disabilityLevel` (number:double)
- `indHelp` (boolean)
- `familySituationCode` (integer)
- `spouseNIF` (string)
- `indAscendants` (boolean)
- `indDescendants` (boolean)
- `indNoResident` (integer)
- `noResidentCountryID` (string)
- `indMobility` (boolean)
- `mobilityDate` (string:date-time)
- `indAutMan` (integer)
- `childrenNumber` (integer)
- `irpfBasePercentage` (number:double)
- `indEconomicActivities` (boolean)
- `noResidentAddress` (string)
- `noResidentAddressComplement` (string)
- `noResidentCity` (string)
- `noResidentRegion` (string)
- `noResidentZip` (string)
- `noResidentNIF` (string)
- `noResidentCountryBirth` (string)
- `noResidentTaxResident` (string)
- `indHomeInvestment` (boolean)
- `homePreviousWithholdingPercentage` (number:double)
- `homeAcquerementDate` (string:date-time)
- `referencePercentage` (number:double)
- `indBusinessAmountLessThan100000` (boolean)

## EmployeeIncentive

- `incentiveID` (string:uuid)
- `incentiveDate` (string:date-time)
- `incentiveTypeID` (integer)
- `incentiveDescription` (string)
- `amount` (number:double)
- `observations` (string)

## EmployeeJobHistory

- `jobPositionHistoryFTE` (string)
- `jobPositionHistoryInitDate` (string)
- `jobPositionHistoryEndDate` (string)
- `jobPositionHistoryEndCause` (string)
- `jobPositionHistoryEmployeeName` (string)
- `jobPositionHistoryJobTitleName` (string)
- `jobPositionHistoryJobPositionCode` (string)
- `jobPositionHistoryOrgUnitName` (string)
- `jobPositionHistoryCompanyName` (string)
- `description` (string)
- `jobTitleDescriptionName` (string)
- `jobTitleDescriptionCode` (string)
- `jobPositionHistoryJobTitleDescriptionCode` (string)
- `jobPositionHistoryJobTitleDescriptionName` (string)

## EmployeeLaborLife

- `id` (string:uuid)
- `date` (string:date-time)
- `motive` (string)

## EmployeeLaborLifeDetail

- `workplaceCode` (integer)
- `workplaceName` (string)
- `ssAffiliationNumberPrefix` (integer)
- `ssAffiliationNumber` (integer:int64)
- `ssAffiliationNumberSuffix` (integer)
- `sex` (string)
- `birthCounty` (string)
- `birthTown` (string)
- `fatherName` (string)
- `motherName` (string)
- `identifierNumber` (string)
- `labourPeriodStartDate` (string:date-time)
- `labourPeriodEndDate` (string:date-time)
- `contractCode` (integer)
- `enrolmentDate` (string:date-time)
- `seniorityCompanyDate` (string:date-time)
- `extraPayCalculationDate` (string:date-time)
- `dropDate` (string:date-time)
- `agreementCode` (string)
- `agreementDescription` (string)
- `classificationCode` (integer)
- `subClassificationCode` (integer)
- `classificationDescription` (string)
- `jobTitleCode` (string)
- `jobTitleDescription` (string)
- `tariffGroup` (string)
- `collectionType` (string)

## EmployeeMedicalResource

- `checkupDate` (string:date-time)
- `invited` (boolean)
- `rejected` (boolean)
- `checked` (boolean)
- `observation` (string)
- `code` (string)
- `description` (string)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `notes` (string)
- `stateDescription` (string)
- `typeDescription` (string)

## EmployeePayCostAttribution

- `payCostAttributionID` (string:uuid)
- `payID` (string:uuid)
- `costAttributionID` (string:uuid)
- `costAttributionTreeID` (string:uuid)
- `costAttributionNodeID` (string:uuid)
- `percentageAttribution` (number:double)
- `costAttributionNodeDescription` (string)
- `costAttributionNodeCode` (string)
- `variableConceptID` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `percentageTotal` (number:double)

## EmployeePayData

- `payID` (string:uuid)
- `identifierNumber` (string)
- `workDayTypeID` (integer)
- `workDayPercentage` (number:double)
- `ssAffiliationNumberPrefix` (integer)
- `ssAffiliationNumber` (integer)
- `ssAffiliationNumberSuffix` (integer)
- `agreementCode` (string)
- `classificationCode` (integer)
- `classificationDescription` (string)
- `regimeTypeID` (string)
- `tariffGroupID` (integer)
- `contractCode` (integer)
- `collectionTypeID` (integer)
- `seniorityCalculationDate` (string:date-time)
- `contributionTypeID` (integer)
- `indFormation` (integer)
- `commonContingenciesMax` (number:double)
- `commonContingenciesMin` (number:double)
- `accidentsBaseMax` (number:double)
- `accidentsBaseMin` (number:double)
- `accidentsUnemploymentMax` (number:double)
- `accidentsUnemploymentMin` (number:double)
- `accidentsTrainingMax` (number:double)
- `accidentsTrainingMin` (number:double)
- `accidentsFogasaMax` (number:double)
- `accidentsFogasaMin` (number:double)
- `enrolmentDate` (string:date-time)
- `dropDate` (string:date-time)
- `extraPayCalculationDate` (string:date-time)
- `ssPaymentNumberID` (string:uuid)
- `ssPaymentNumber` (string)
- `indNoResident` (integer)
- `agreementDescription` (string)
- `contractDescription` (string)
- `contributionTypeDescription` (string)
- `ccGroupDescription` (string)
- `dropCauseID` (integer)
- `subClassificationCode` (integer)
- `subClassificationDescription` (string)
- `jobTitleCode` (string)
- `jobTitle` (string)
- `contributionAgrarianModeID` (integer)
- `indReductionRealDay` (boolean)
- `agrarianCensusExclusionTypeID` (integer)
- `labourPeriodStartDate` (string:date-time)
- `labourPeriodEndDate` (string:date-time)
- `seniorityCompanyDate` (string:date-time)
- `extensionStartDate` (string:date-time)
- `extensionEndDate` (string:date-time)
- `extensionsNumber` (integer)
- `indIgnoreMinTax` (boolean)
- `workplaceBankAccountID` (string:uuid)
- `indEmployeeSubClassification` (boolean)
- `citricRegimeContributionTypeID` (integer)
- `indENotGenSegmCRW` (boolean)
- `indEAutManNotGenSegmCRW` (boolean)
- `citricRegimePermanenceCoefficientTypeID` (integer)
- `payLocked` (boolean)
- `baseAC` (number:double)
- `baseCC` (number:double)
- `prorratedExtraPay` (number:double)
- `totalBaseIRPF` (number:double)
- `totalDeduction` (number:double)
- `totalGross` (number:double)
- `totalRemuneration` (number:double)
- `costBusiness` (number:double)
- `percentageIMS` (number:double)
- `percentageIT` (number:double)
- `indPublication` (boolean)
- `workplaceCode` (string)
- `publicationDate` (string:date-time)
- `hasMailTo` (boolean)
- `irpfPercentage` (number:double)

## EmployeePositionDetails

- `orgUnitId` (string:uuid)
- `employeeCode` (string)
- `employeeName` (string)
- `jobCode` (string)
- `jobTitle` (string)
- `department` (string)
- `companyName` (string)
- `responsibleTo` (string)
- `responsibleToCode` (string)
- `fte` (number:double)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `endReason` (integer)
- `endReasonDescription` (string)
- `organizationalUnit` (string)
- `positionNo` (integer)
- `totalPostitions` (integer)

## EmployeeSanction

- `sanctionID` (string:uuid)
- `sanctionDate` (string:date-time)
- `sanctionTypesDescription` (string)
- `sanctionSeriousnessDescription` (string)
- `observations` (string)

## EmployeeSubClassification

- `classificationCode` (integer)
- `subClassificationCode` (integer)
- `classificationFactor` (number:double)
- `employeeFactor` (number:double)
- `factor` (number:double)

## EmployeesCollectionResource

- `employeeId` (string:uuid)
- `employeeCode` (string)
- `completeName` (string)
- `identifierNumber` (string)
- `dropDate` (string:date-time)
- `workplaceCode` (integer)
- `tariffGroupID` (integer)
- `extraPayGroupID` (string:uuid)
- `lastUpdate` (string:date-time)
- `ssNAF` (string)
- `personTypeDescription` (string)
- `personTypeID` (integer)
- `enrolmentDate` (string:date-time)
- `indNonRemuneratedPractices` (boolean)
- `collectionTypeID` (integer)
- `collectionTypeDescription` (string)

## ExcludedConcept

- `conceptCode` (integer)
- `concept` (string)

## ExcludedConceptGroup

- `groupID` (string:uuid)
- `description` (string)

## ExtraPayment

- `extraPayID` (string:uuid)
- `collectionDateDay` (integer)
- `collectionDateMonth` (integer)
- `amount` (number:double)
- `extraPayName` (string)

## ExtraPaymentFundingSource

- `payment` (integer)
- `paymentId` (string:uuid)
- `description` (string)
- `amount` (number:double)

## FixedRemuneration

- `charged` (number:double)
- `earning` (number:double)
- `imported` (number:double)
- `importedOverride` (boolean)

## HiringDatesEntityResource

- `enrolmentDate` (string:date-time)
- `dropDate` (string:date-time)
- `dropCause` (string)
- `dropCauseId` (integer)
- `extraPayCalculationDate` (string:date-time)
- `seniorityCalculationDate` (string:date-time)
- `seniorityCompanyDate` (string:date-time)
- `labourPeriodStartDate` (string:date-time)
- `labourPeriodEndDate` (string:date-time)
- `contributionTypeID` (integer)
- `contributionType` (string)

## HistoricPayDaysInfoResource

- `situationTypeID` (integer)
- `description` (string)
- `units_N_Collection` (number:double)
- `units_N_Contribution` (number:double)
- `units_L` (number:double)
- `units_LL` (number:double)
- `units_LX` (number:double)
- `units_LLX` (number:double)
- `units_DSL` (number:double)
- `units_H` (number:double)

## Holiday

- `indLessThanOneDay` (boolean)

## HolidaysCollectionItemResource

- `absenteeismID` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `lastUpdate` (string:date-time)

## HolidaysEntityResource

- `absenteeismID` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `indLessThanOneDay` (boolean)
- `percentageDayAbsenteeisms` (number:double)

## HolidaysPercentagesCollectionResource

- `percentage` (number:double)
- `description` (string)

## HolyDatesModel

- `holidayID` (string:uuid)
- `holidayDateDay` (integer)
- `holidayDateMonth` (integer)
- `description` (string)
- `revision` (integer)

## IRPFCalcuation

- `retentionPercentage` (number:double)
- `lastForecastDate` (string:date-time)
- `fixedRemuneration` (FixedRemuneration)
- `variableRemuneration` (VariableRemuneration)
- `irregularExpensesIncome` (IrregularExpensesIncome)
- `reductions` (Reductions)
- `results` (Results)
- `simulatedRemuneration` (SimulatedRemuneration)
- `controlSpecies` (ControlSpecies)

## IdentificationResource

- `employeeCode` (string): EmployeeCode
- `workplaceCode` (string): WorkplaceCode
- `name` (string): Name
- `secondName1` (string): SecondName1
- `secondName2` (string): SecondName2
- `identifierNumber` (string): IdentifierNumber
- `identifierNumberExpiryDate` (string:date-time): IdentifierNumberExpiryDate
- `identificationTypeID` (integer): IdentificationTypeID
- `identificationTypeDescription` (string): IdentificationTypeDescription
- `ssAffiliationNumber` (string): SSAffiliationNumber
- `birthPlace` (string): BirthPlace
- `initialDate` (string:date-time): InitialDate
- `gender` (string): Employee gender belongs to male, female
- `birthCountry` (string): BirthCountry
- `civilStatus` (string): Employee civilStatus belongs to
- `fatherName` (string): FatherName
- `motherName` (string): MotherName
- `transferToGt` (boolean): TransferToGt
- `personTypeID` (string): PersonTypeID
- `personTypeDescription` (string): PersonTypeDescription
- `sex` (string): Sex
- `occupationCodeTGSS` (string): OccupationCodeTGSS

## IdentificationTypeResource

- `id` (integer)
- `description` (string)

## IllnessesCollectionResource

- `illnessId` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `lastUpdate` (string:date-time)

## IllnessesResource

- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `benefitTypeID` (string)
- `indComplement` (boolean)

## Indicators

- `tdIllness` (boolean)
- `tdAccident` (boolean)
- `tdMaternity` (boolean)
- `tdPregnancyRisk` (boolean)
- `strike` (boolean)
- `absenteeism` (boolean)
- `suspension` (boolean)
- `paidLeave` (boolean)
- `partialTime` (boolean)
- `partialUnemployment` (boolean)
- `enrolmentDrop` (boolean)
- `inactivityPeriods` (boolean)

## IrregularExpensesIncome

- `monetaryInKindCompensation` (number:double)
- `netIncomeWork` (number:double)
- `pensionPlans` (number:double)
- `pensionPlansOverride` (boolean)
- `mutualSocialSecurityContribution` (number:double)
- `mutualSocialSecurityContributionOverride` (boolean)
- `reductionIrregularIncome` (number:double)
- `reductionIrregularIncomeOverride` (boolean)
- `quotationSocialSecurityMutualEmployee` (number:double)
- `quotationSocialSecurityMutualEmployeeOverride` (boolean)
- `socialSecuritySelfEmployed` (number:double)
- `socialSecuritySelfEmployedOverride` (boolean)
- `deductionsPassiveRights` (number:double)
- `orphanageSchoolQuotes` (number:double)
- `orphanageSchoolQuotesOverride` (boolean)

## JobPosition

- `jobPositionID` (string:uuid)
- `jobPositionCode` (string)
- `jobTitleID` (string:uuid)
- `jobTitleDescription` (string)
- `jobTitleCode` (string)
- `orgUnitID` (string:uuid)
- `orgUnitName` (string)
- `organigramCode` (string)
- `organigramName` (string)
- `jobPositionType` (string)
- `jobPositionCreateDate` (string:date-time)
- `jobPositionDropDate` (string:date-time)
- `jobPositionDropCause` (string)
- `jobPositionFixedAmount` (number:float)
- `jobPositionFTE` (number:double)
- `jobPositionSuperiorBandAmount` (number:float)
- `jobPositionInferiorBandAmount` (number:float)
- `jobPositionRealFTE` (number:double)

## JobPositionDropCause

- `id` (integer)
- `description` (string)

## JobTitle

- `jobTitleID` (string:uuid)
- `jobTitleCode` (string)
- `jobTitleDescription` (string)
- `jobTitleFunctionsDescription` (string)

## JobTitleDescriptionItem

- `jobTitleDescriptionId` (string:uuid)
- `jobTitleDescriptionCode` (string)
- `jobTitleDescription` (string)

## JobTitleEntityResource

- `jobTitleID` (string:uuid)
- `jobTitleCode` (string)
- `jobTitleDescription` (string)

## KeyValuePairInt32String

- `key` (integer)
- `value` (string)

## KeyValuePairStringString

- `key` (string)
- `value` (string)

## MaintenanceGroupModel

- `id` (integer)
- `description` (string)

## MedicalCheckupStateResource

- `checkupStateId` (integer)
- `description` (string)

## MedicalCheckupTypeResource

- `checkupTypeId` (integer)
- `description` (string)

## Municipality

- `municipalityCode` (string)
- `name` (string)

## NonWorkAccidentsCollectionResource

- `nonWorkAccidentId` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `lastUpdate` (string:date-time)

## NonWorkAccidentsResource

- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `benefitTypeID` (string)
- `indComplement` (boolean)

## Occupation

- `id` (string)
- `description` (string)

## OccupationPercentageModel

- `occupationCode` (string)
- `occupationDescription` (string)
- `percentageIT` (number:double)
- `percentageIMS` (number:double)

## OrganigramNodeResource

- `children` (OrganigramNodeResource[])
- `orgUnitID` (string:uuid)
- `orgUnitNodeID` (string:uuid)
- `orgUnitTypeName` (string)
- `orgUnitName` (string)
- `orgUnitDescription` (string)
- `orgUnitCode` (string)
- `orgUnitManagerName` (string)
- `orgUnitCreateDate` (string:date-time)
- `orgUnitDropDate` (string:date-time)
- `orgUnitManagerCode` (string)
- `orgUnitManagerIdentifierNumber` (string)
- `orgUnitCompanyName` (string)

## PactedSalary

- `amount` (number:double)
- `distribution` (ConceptDistribution[])
- `liquidationType` (string)

## PaidLeave

- `absenteeismID` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `durationHours` (integer)
- `durationMinuts` (integer)
- `canceledAbsenteeismID` (string:uuid)
- `indDiscountRestsWeekly` (boolean)
- `indLessThanOneDay` (boolean)
- `indDiscountNaturalDays` (boolean)
- `percentageDayAbsenteeisms` (number:double)
- `indCompanyContributionOnly` (boolean)
- `indLateCommunicationDrop` (boolean)
- `forcedDescription` (string)
- `partialWorkdayPercentage` (number:double)
- `leave` (string)
- `leaveId` (string)

## PaidLeaveType

- `leaveID` (integer)
- `leave` (string)
- `shortDescription` (string)
- `days` (integer)

## PartialBirthPermitGetEntity

- `periods` (PartialBirthPermitPeriodGetEntity[])
- `startDate` (string:date-time)
- `indLocked` (boolean)
- `endDate` (string:date-time)
- `lastUpdate` (string:date-time)
- `birthPermitType` (string)
- `benefitTypeID` (string)
- `contingencyID` (string)
- `indComplement` (boolean)
- `indAutManEndDate` (boolean)
- `forcedDescription` (string)
- `indCovid19` (boolean)

## PartialBirthPermitPeriodGetEntity

- `id` (string:uuid)
- `payLocked` (boolean)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `percentage` (number:double)

## PayAccrualInfo

- `calendarDaysWorked` (number:double)
- `calendarDaysAbsent` (number:double)
- `workDayType` (string)
- `daysAccrued` (number:double)
- `percentage` (number:double)

## PayAccrueds

- `situationType` (string)
- `situationBreakDown` (string)
- `units_N_Collection` (number:double)
- `units_N_Contribution` (number:double)
- `units_L` (number:double)
- `units_LL` (number:double)
- `units_LX` (number:double)
- `units_LLX` (number:double)
- `units_DSL` (number:double)
- `units_DSS` (number:double)
- `units_DSD` (number:double)
- `units_FT` (number:double)
- `units_H` (number:double)
- `percentage` (number:double)
- `payTemporaryDisabilityID` (string:uuid)
- `payAbsenteeismID` (string:uuid)
- `situationStartDate` (string:date-time)
- `situationEndDate` (string:date-time)
- `situationBreakDownStartDate` (string:date-time)
- `situationBreakDownEndDate` (string:date-time)
- `payUnemploymentID` (string:uuid)
- `units_SAB` (number:double)
- `units_DOM` (number:double)
- `units_N_ContributionForCollection` (number:double)
- `termType` (string)
- `termOrderID` (integer)
- `termStartDate` (string:date-time)
- `termEndDate` (string:date-time)
- `units_H_SLD` (number:double)

## PayAdvance

- `id` (string:uuid)
- `description` (string)
- `date` (string:date-time)
- `totalAmount` (number:double)
- `remainingAmount` (number:double)
- `totalMonthly` (number:double)
- `remainingMonthly` (number:double)
- `fundingSource` (string)
- `extraPaymentSources` (ExtraPaymentFundingSource[])

## PayBankAccountResource

- `payBankAccountCode` (string:uuid)

## PayBonificationsModel

- `payTypeID` (integer)
- `payTypeDescription` (string)
- `payDate` (string:date-time)
- `paymentDate` (string:date-time)
- `accruedStartDate` (string:date-time)
- `accruedEndDate` (string:date-time)
- `periodStartDate` (string:date-time)
- `periodEndDate` (string:date-time)
- `bonificationTypeID` (integer)
- `bonificationTypeDescription` (string)
- `bonificationTypePercentage` (number:double)
- `bonificationTypePercentageIncrement` (number:double)
- `bonificationStartDate` (string:date-time)
- `bonificationEndDate` (string:date-time)
- `dispositionDate` (string:date-time)
- `validityStartDate` (string)
- `validityPercentage` (string:date-time)
- `validityAmount` (number:double)
- `duration` (integer)
- `bonification` (boolean)
- `commonContingencies` (boolean)
- `accidentContingencies` (boolean)
- `unemploymentContingencies` (boolean)
- `fpContingencies` (boolean)
- `fogasaContingencies` (boolean)
- `bonusCommunityCode` (string)
- `situationTypeID` (integer)
- `situationCode` (integer)
- `situationCodeDescription` (string)
- `bonificationValidityAmount` (number:double)
- `bonificationValidityUnits` (number:double)
- `description` (string)

## PayConceptsModel

- `conceptCode` (integer)
- `conceptType` (string)
- `description` (string)
- `payConceptAmount` (number:double)
- `payConceptUnits` (number:double)
- `payConceptUnitsAmount` (number:double)
- `indMonthlyPayCollection` (boolean)
- `indExtraPayCollection` (boolean)
- `conceptCollectionTypeID` (integer)
- `conceptCollectionTypeDesc` (string)
- `paySubClassificationsID` (string:uuid)
- `isDiscount` (boolean)

## PayEmbargo

- `id` (string:uuid)
- `description` (string)
- `date` (string:date-time)
- `totalAmount` (number:double)
- `remainingAmount` (number:double)
- `totalMonthly` (number:double)
- `remainingMonthly` (number:double)
- `fundingSource` (string)
- `cancellationDate` (string:date-time)

## PayGroupModel

- `description` (string)
- `groupID` (string:uuid)
- `revision` (integer)

## PayModel

- `payDate` (string:date-time)
- `payId` (string:uuid)
- `payType` (string)
- `payTypeId` (integer)
- `periodEndDate` (string:date-time)
- `periodStartDate` (string:date-time)
- `accruedStartDate` (string:date-time)
- `accruedEndDate` (string:date-time)
- `indCheque` (boolean)
- `totalDeductions` (number:double)
- `systemDate` (string:date-time)
- `payLocked` (boolean)
- `workplaceName` (string)
- `workplaceCode` (string)

## PaySubClassificationsModel

- `paySubClassificationsID` (string:uuid)
- `classificationCode` (string)
- `classificationDescription` (string)
- `classificationFactor` (number:double)
- `employeeFactor` (number:double)
- `factor` (number:double)

## PayTypeGroup

- `id` (string)

## PaymentFrequenciesModel

- `collectionTypeID` (integer)
- `description` (string)

## PerceptionSubkeyResource

- `perceptionTypeID` (integer): PerceptionTypeID
- `perceptionTypeCode` (string): PerceptionTypeCode
- `perceptionTypeDescription` (string): PerceptionTypeDescription
- `perceptionSubTypeCode` (integer): PerceptionSubTypeCode
- `perceptionSubTypeDescription` (string): PerceptionSubTypeDescription

## PersonTypeResource

- `id` (integer)
- `description` (string)

## PersonalContactDataEntityResource

- `personalphone` (string)
- `personalphone2` (string)
- `personalemail` (string)

## Portal

- `portalCode` (integer)
- `portalName` (string)
- `companyCode` (integer)
- `companyName` (string)
- `mfaEnabled` (boolean)

## PortalUser

- `portalCode` (integer)
- `portalName` (string)
- `companyCode` (integer)
- `employeeCode` (integer)
- `username` (string)
- `userID` (string)
- `blocked` (boolean)
- `profileType` (string)
- `profileName` (string)
- `lastBlocked` (string:date-time)
- `lastLogin` (string:date-time)

## PostalCodeCollectionResource

- `code` (string)
- `municipality` (string)

## PregnancyRisksCollectionResource

- `temporaryDisabilityId` (string:uuid): Identifier of the temporary disability episode this pregnancy risk belongs to.
- `startDate` (string:date-time): Start date of the pregnancy risk period.
- `endDate` (string:date-time): End date of the pregnancy risk period. Not emitted when it has the default {System.DateTime} value.
- `lastUpdate` (string:date-time): Last update timestamp for this pregnancy risk record. Not emitted when it has the default {System.DateTime} value.

## ProfessionalContactDataEntityResource

- `directphone` (string)
- `professionalphone` (string)
- `extension` (string)
- `fax` (string)
- `professionalemail` (string)

## ProfessionalIllnessesCollectionResource

- `professionalIllnessId` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `lastUpdate` (string:date-time)

## ProfessionalIllnessesResource

- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `benefitTypeID` (string)
- `indComplement` (boolean)

## Reductions

- `workReductions` (number:double)
- `reductionsActiveWorkers` (number:double)
- `reductionDueToMinimumStaff` (number:double)
- `recipientReductions` (number:double)
- `reductionForFamilyMinimum` (number:double)
- `spousalCompensatoryPensions` (number:double)
- `childSupportAnnuities` (number:double)
- `reductionCopaAmerica` (number:double)

## RegimeModel

- `regimeID` (string:uuid)
- `description` (string)

## RegionCollectionResource

- `regionCode` (string)
- `name` (string)

## RemoteWorkAgreement

- `agreementStartDate` (string:date-time)
- `agreementEndDate` (string:date-time)
- `workStartTime1` (string)
- `workEndTime1` (string)
- `workStartTime2` (string)
- `workEndTime2` (string)
- `indAvailabilityRules` (boolean)
- `distancePercentage` (number:double)
- `placeWorkMunicipalityCode` (string)
- `placeWorkMunicipality` (string)
- `remoteWorkMunicipalityCode` (string)
- `remoteWorkMunicipality` (string)
- `placeWorkCountryID` (integer)
- `placeWorkCountry` (string)
- `remoteWorkCountryID` (integer)
- `remoteWorkCountry` (string)
- `noticePeriodDays` (integer)
- `agreementDurationDays` (integer)
- `indWithoutContractID` (boolean)
- `contractType` (string)
- `indContractContrata` (boolean)

## Results

- `taxableBaseForType` (number:double)
- `retentionFee` (number:double)
- `limitQuota35` (number:double)
- `limitQuota45` (number:double)

## Retributed

- `leave` (string)
- `leaveId` (string)

## ReturnArrestImports

- `embargoRest` (number:double)
- `descuentoEmbargo` (number:double)
- `embargoTotal` (number:double)

## SexTypeResource

- `id` (string)
- `description` (string)

## SimulatedRemuneration

- `fixedRemuneration` (number:double)
- `fixedRemunerationOverride` (boolean)
- `socialSecurityWorker` (number:double)
- `socialSecurityWorkerOverride` (boolean)
- `withholdingsMade` (number:double)
- `withholdingsMadeOverride` (boolean)

## SpecialContract

- `id` (string)
- `description` (string)

## TDAccidentNotLeaveReport

- `economicActivityWorkPlaceDescription` (string): Description of economic activity of the workplace.
- `accidentNotLeaveReportDate` (string:date-time): Date of the accident not leave report.
- `accidentDate` (string:date-time): Date of the accident.
- `formID` (integer): Form identifier.
- `lesionDescriptionID` (integer): Lesion description identifier.
- `injuredBodyPartID` (integer): Injured body part identifier.
- `personSignsName` (string): Name of the person who signs the report.
- `personSignsQuality` (string): Quality of the person who signs the report.
- `locationSignsReport` (string): Location where the report is signed.
- `dateSignsReport` (string:date-time): Date when the report is signed.
- `entityAgentID` (string): Entity agent identifier.
- `autonomous` (boolean): Indicates if autonomous.
- `contractType` (string): Contract type.
- `staff` (integer): Staff count.
- `sendingState` (integer): Sending state identifier.
- `workPlaceMunicipalityCode` (string): Workplace municipality code.
- `workPlacePostalCode` (string): Workplace postal code.
- `companySS` (string): Company social security number.

## TDAccidentReport

- `accidentSiteID` (integer): Site identifier where the accident occurred.
- `indTrafficAccident` (boolean): Indicates if it was a traffic accident.
- `countrySiteID` (integer): Country identifier of the accident site.
- `regionSiteID` (string:uuid): Region identifier of the accident site.
- `municipalitySiteID` (integer): Municipality identifier of the accident site.
- `streetNameSite` (string): Street name of the accident site.
- `publicViaSite` (string): Public via of the accident site.
- `otherSite` (string): Other details of the accident site.
- `indSameWorkPlace` (boolean): Indicates if the accident occurred in the same workplace.
- `indSameWorkPlaceDades` (boolean): Indicates if the accident occurred in the same workplace (Dades).
- `relationWorkPlaceID` (integer): Relationship with the workplace identifier.
- `identificationNumberWorkPlace` (string): Workplace identification number.
- `taxIdentificationWorkPlace` (string): Workplace tax identification.
- `workPlaceName` (string): Workplace name.
- `streetNameWorkPlace` (string): Workplace street name.
- `regionWorkPlaceID` (string:uuid): Workplace region identifier.
- `municipalityWorkPlaceID` (integer): Workplace municipality identifier.
- `postalCodeWorkPlaceID` (integer): Workplace postal code identifier.
- `telefonWorkPlace` (string): Workplace phone number.
- `insoleWorkPlace` (integer): Insole of the workplace.
- `economicActivityWorkPlaceDescription` (string): Description of economic activity of the workplace.
- `economicActivityWorkPlaceID` (integer): Identifier of economic activity of the workplace.
- `accidentDate` (string:date-time): Date of the accident.
- `leaveDate` (string:date-time): Leave date due to the accident.
- `weekDay` (string): Weekday of the accident.
- `hourDayID` (integer): Identifier of the hour of day when the accident occurred.
- `hourWorkID` (integer): Identifier of the hour of work when the accident occurred.
- `indUsualWork` (boolean): Indicates if it was usual work.
- `indEvaluationRisk` (boolean): Indicates if there was a risk evaluation.
- `accidentDescription` (string): Description of the accident.
- `siteTypePersonDescription` (string): Description of the site type person.
- `siteTypeID` (integer): Site type identifier.
- `jobTypeDescription` (string): Job type description.
- `jobTypeID` (integer): Job type identifier.
- `materialAgentFormID` (integer): Material agent form identifier.
- `materialAgentPhysicalActivityID` (integer): Material agent physical activity identifier.
- `physicalActivityDescription` (string): Physical activity description.
- `physicalActivityID` (integer): Physical activity identifier.
- `deviationDescription` (string): Deviation description.
- `deviationID` (integer): Deviation identifier.
- `formDescription` (string): Form description.
- `formID` (integer): Form identifier.
- `materialAgentDeviationID` (integer): Material agent deviation identifier.
- `materialAgentFormDescription` (string): Material agent form description.
- `indMoreWorker` (boolean): Indicates if more than one worker was involved.
- `indWitness` (boolean): Indicates if there were witnesses.
- `witnessDades` (string): Witness details.
- `lesionDescriptionID` (integer): Lesion description identifier.
- `lesionGradeID` (integer): Lesion grade identifier.
- `injuredBodyPartID` (integer): Injured body part identifier.
- `nameDoctor` (string): Doctor name.
- `addressDoctor` (string): Doctor address.
- `telefoneDoctor` (string): Doctor phone.
- `hospitalAttendanceID` (integer): Hospital attendance identifier.
- `indHospitalization` (boolean): Indicates if there was hospitalization.
- `hospitalName` (string): Hospital name.
- `personSignsName` (string): Name of the person who signs the report.
- `personSignsQuality` (string): Quality of the person who signs the report.
- `locationSignsReport` (string): Location where the report is signed.
- `dateSignsReport` (string:date-time): Date when the report is signed.
- `entityAgentID` (string): Entity agent identifier.
- `numberFileEntityAgent` (string): Number file entity agent.
- `labAuthority` (string): Labor authority.
- `sendingStateID` (integer): Sending state identifier.
- `indPrevServiceCompany` (boolean): Indicates if there is a prevention service by the company.
- `indPrevServiceOwn` (boolean): Indicates if there is an own prevention service.
- `indPrevServiceForeign` (boolean): Indicates if there is a foreign prevention service.
- `indPrevServiceEmployee` (boolean): Indicates if there is a prevention service for employees.
- `indPrevServiceCommunity` (boolean): Indicates if there is a community prevention service.
- `indNoPrevService` (boolean): Indicates if there is no prevention service.
- `ocupationTGSSID` (string): TGSS occupation ID.
- `countrySite` (string): Country name of the accident site.
- `municipalitySite` (string): Municipality name of the accident site.
- `regionWorkPlace` (string): Region name of the workplace.
- `lesionDescription` (string): Lesion description text.
- `lesionGrade` (string): Lesion grade text.
- `accidentSite` (string): Accident site text.
- `deviation` (string): Deviation text.
- `formm` (string): Form text.
- `hospitalAttendance` (string): Hospital attendance text.
- `jobType` (string): Job type text.
- `injuredBodyPart` (string): Injured body part text.
- `materialAgentDeviation` (string): Material agent deviation text.
- `materialAgentForm` (string): Material agent form text.
- `materialAgentPhysicalActivity` (string): Material agent physical activity text.
- `physicalActivity` (string): Physical activity text.
- `siteType` (string): Site type text.
- `relationWorkplace` (string): Relationship with workplace text.

## TDConfirmationReport

- `confirmationReportID` (string:uuid): Unique identifier of the confirmation report.
- `reportDate` (string:date-time): Date of the report.
- `reportNumber` (integer): Confirmation report sequence number.
- `collegiateNumber` (string): Medical collegiate number.
- `cias` (string): CIAS reference.
- `insuranceCompany` (string): Insurance company name.
- `insuranceChangeDate` (string:date-time): Date when insurance changed.
- `sendingStateID` (integer): Sending state identifier.
- `tdProcessType` (string): Process type name mapped from {WKE.HCM.Payroll.Api.Models.Entities.TD.TDConfirmationReport.TDProcessTypeID}.
- `indLastConfirmationReportTransfer` (boolean): Indicates if this is the last confirmation report transfer.
- `tdEntityIssueTypeID` (integer): Entity issue type ID.
- `tdEmployeeSituationTypeID` (integer): Employee situation type ID.
- `healthcareCardNumber` (string): Healthcare card number.
- `tdEmployeeSituationType` (string): Employee situation type name mapped from {WKE.HCM.Payroll.Api.Models.Entities.TD.TDConfirmationReport.TDEmployeeSituationTypeID}.
- `tdProcessTypeID` (integer): Process type ID.
- `nextMedicalRevisionDate` (string:date-time): Next medical revision date.
- `tdEntityIssueType` (string): Issuing entity type name mapped from {WKE.HCM.Payroll.Api.Models.Entities.TD.TDConfirmationReport.TDEntityIssueTypeID}.
- `complimentDate365Days` (string:date-time): Compliment date reaching 365 days.
- `sendingStat` (string): Sending state name mapped from {WKE.HCM.Payroll.Api.Models.Entities.TD.TDConfirmationReport.SendingStateID}.

## TDDetaiIllness

- `indCovid19` (boolean): Indicates if the illness is related to COVID-19.
- `indAutManEndDate` (boolean): Indicates if end date is handled automatically or manually.

## TDDetail

- `temporaryDisabilityID` (string:uuid): Unique identifier of the temporary disability.
- `employeeID` (string:uuid): Unique identifier of the employee associated with the TD.
- `employeeCode` (string): Employee code.
- `incidentType` (string): Type of incident causing the temporary disability.
- `startDate` (string:date-time): Start date of the temporary disability.
- `endDate` (string:date-time): End date of the temporary disability.
- `lastUpdate` (string:date-time): Last update date of the TD record.
- `indHospitalization` (boolean): Indicates if there was hospitalization associated with the TD.
- `forcedDescription` (string): Optional forced description of the TD.
- `fiscal` (TDDetailFiscal)
- `relapse` (TDDetailRelapse)
- `maternity` (TDDetailMaternity)
- `illness` (TDDetaiIllness)
- `confirmationReports` (TDConfirmationReport[]): List of confirmation reports associated with the TD.
- `accidentReport` (TDAccidentReport)
- `hospitalizationReports` (TDHospitalizationReport[]): List of hospitalization reports associated with the TD.
- `accidentNotLeaveReport` (TDAccidentNotLeaveReport)
- `leaveReport` (TDLeaveReport)

## TDDetailFiscal

- `benefitType` (string): Type of benefit applied.
- `contingencyType` (string): Contingency type of the TD.
- `indComplement` (boolean): Indicates whether a complement applies.

## TDDetailMaternity

- `percentagePartialMaternity` (number:double): Percentage of partial maternity.

## TDDetailRelapse

- `relapsedIncidentID` (string:uuid): Identifier of the relapsed incident.
- `parentIncidentID` (string:uuid): Identifier of the parent incident related to the relapse.

## TDHospitalizationReport

- `hospitalizationID` (string:uuid): Unique identifier of hospitalization.
- `startDate` (string:date-time): Start date of hospitalization.
- `endDate` (string:date-time): End date of hospitalization.

## TDLeaveReport

- `motive` (string): Medical motive or diagnosis associated with the leave.
- `colegiateNumber` (string): Healthcare professional collegiate number issuing the leave report.
- `cias` (string): CIAS identifier of the issuing healthcare center.
- `leaveDate` (string:date-time): Date when the leave begins.
- `daysProbableDuration` (integer): Probable duration of the leave in days.
- `monthsProbableDuration` (integer): Probable duration of the leave in months.
- `contributionsBaseCC` (number:double): Contribution base for common contingencies.
- `contributionsBasePC` (number:double): Contribution base for professional contingencies.
- `contributionsDays` (integer): Number of contribution days considered for the calculation.
- `taxableBaseCC` (number:double): Taxable base for common contingencies.
- `taxableBasePC` (number:double): Taxable base for professional contingencies.
- `atepDate` (string:date-time): Date of the ATEP (work accident or professional disease) incident, if any.
- `extraHoursContributionsBase` (number:double): Contribution base corresponding to extra hours.
- `incentiveContributionsBase` (number:double): Contribution base corresponding to incentives.
- `totalContributionsBase` (number:double): Total contribution base used in the calculation.
- `dailyAvgContributionsBase` (number:double): Average daily contribution base.
- `dailyAvgContributionsDays` (number:double): Average number of contribution days used for the calculation.
- `sendingStateID` (integer): Identifier of the sending state, when applicable.
- `benefitDays` (integer): Number of days of benefit entitlement.
- `benefitBase` (number:double): Base amount used to calculate the benefit.
- `benefitTaxableBase` (number:double): Taxable base of the benefit.
- `tdEntityIssueTypeID` (integer): Identifier of the entity issue type for the leave report.
- `tdEmployeeSituationTypeID` (integer): Identifier of the employee situation type at the time of the leave.
- `healthcareCardNumber` (string): Healthcare card number of the employee.
- `tdProcessTypeID` (integer): Process type identifier associated with the temporary disability.
- `lastProcessEndDate` (string:date-time): End date of the last process related to the incident, if any.
- `firstProcessEndDate` (string:date-time): End date of the first process related to the incident, if any.
- `tdAccidentTypeID` (integer): Identifier of the accident type associated with the leave.
- `tdAssistanceTypeID` (integer): Identifier of the medical assistance type.
- `nextMedicalRevisionDate` (string:date-time): Date of the next programmed medical revision.
- `tdEmployeeSituationType` (string): TDEmployeeSituationType
- `tdEntityIssueType` (string): TDEntityIssueType
- `tdAccidentType` (string): TDAccidentType
- `tdAssistanceType` (string): medical assistance type.

## TariffGroupModel

- `contributionGroupID` (integer)
- `description` (string)

## TemplateFieldDefinitionModel

- `id` (integer)
- `name` (string)
- `elType` (integer)
- `defValue` (string)
- `listID` (string)
- `linkedElement` (string)
- `posX` (integer)
- `posY` (integer)
- `sizeX` (integer)
- `sizeY` (integer)
- `style` (string)
- `url` (string)
- `dateFormat` (string)

## TemplateListValues

- `code` (string)
- `name` (string)

## TemplateModel

- `id` (integer)
- `name` (string)

## TemporaryDisability

- `temporaryDisabilityID` (string:uuid)
- `employeeID` (string:uuid)
- `employeeCode` (string)
- `incidentTypeID` (integer)
- `description` (string)
- `contingencyDescription` (string)
- `startdate` (string:date-time)
- `enddate` (string:date-time)
- `indCovid19` (boolean)
- `indHospitalization` (boolean)
- `indComplement` (boolean)
- `percentagePartialMaternity` (number:double)
- `benefitTypeId` (integer)
- `contingencyID` (integer)
- `relapsedIncidentID` (string:uuid)
- `parentIncidentID` (string:uuid)
- `lastUpdate` (string:date-time)
- `indAutManEndDate` (boolean)
- `forcedDescription` (string)

## TheoreticalGross

- `year` (integer)
- `autGrossCW` (number:double)
- `manGrossCW` (number:double)
- `indAutManCW` (boolean)
- `autGrossPW` (number:double)
- `manGrossPW` (number:double)
- `indAutManPW` (boolean)
- `calculationDate` (string:date-time)

## TimeTable

- `workDayTypeID` (string)
- `totalWeekHours` (number:double)
- `completeWorkDayStartID` (string)
- `completeWorkDayEndID` (string)
- `workDayDistribution` (string)
- `indComplementaryHours` (boolean)
- `annexDocument` (string)
- `partialPeriodTypeID` (string)
- `partialHours` (number:double)
- `workDayNotLessThan` (string)
- `workDayMax` (integer)

## TrainingActionDigestResource

- `code` (string)
- `name` (string)
- `area` (integer)

## TrainingActionResource

- `code` (string)
- `name` (string)
- `area` (integer)
- `adressedTo` (string)
- `objectives` (string)
- `contents` (string)
- `modality` (integer)
- `hours1` (number:double)
- `hours2` (number:double)
- `hours3` (number:double)
- `hours4` (number:double)
- `hours_Total` (number:double)
- `type` (boolean)
- `level` (boolean)
- `indAlfInf` (boolean)
- `hoursAlfInf` (number:double)
- `indITTec` (boolean)
- `hoursITTec` (number:double)
- `indPrevRisLab` (boolean)
- `hoursPrevRisLab` (number:double)
- `indSenMedAmb` (boolean)
- `hoursSenMedAmb` (number:double)
- `actionGroup` (string)
- `url` (string)
- `user` (string)
- `userPass` (string)
- `observations` (string)
- `professionalArea` (integer)
- `platformCif` (string)
- `platformBusinessName` (string)

## TrainingCenterDigestResource

- `code` (string)
- `cif` (string)
- `name` (string)
- `municipallity` (string)
- `country` (string)

## TrainingCenterResource

- `code` (string)
- `name` (string)
- `adress` (string)
- `postalCode` (string)
- `municipallity` (string)
- `telephone` (string)
- `contact` (string)
- `comments` (string)
- `cif` (string)
- `country` (string)

## TrainingGroupDigestResource

- `code` (string)
- `name` (string)
- `year` (integer)
- `state` (integer)
- `cif` (string)

## TrainingGroupForYear

- `trainingGroupId` (string:uuid)
- `code` (string)
- `name` (string)
- `year` (integer)
- `comments` (string)
- `initDate` (string:date-time)
- `endDate` (string:date-time)
- `responsible` (string)
- `laborHours` (number:double)
- `directCosts` (number:double)
- `asociatedCosts` (number:double)
- `personalCosts` (number:double)
- `personalCosts_Autom` (boolean)
- `portalPublished` (boolean)
- `actionCode` (string)
- `actionName` (string)
- `groupCompaniesNames` (string)
- `areaDescription` (string)
- `subAreaDescription` (string)
- `groupParticipantsCount` (integer)
- `actionTotalHours` (number:double)
- `actionModality` (integer)
- `actionType` (boolean)
- `actionLevel` (boolean)
- `centerName` (string)
- `totalParticipantsEvaluated` (integer)
- `averagePresence` (number:double)
- `costPersonal` (number:double)
- `costDirect` (number:double)
- `costAssociate` (number:double)
- `costTotal` (number:double)
- `trainingPlace` (string)
- `notifiedFor` (boolean)
- `means_Company` (boolean)
- `means_OrgEntity` (boolean)
- `means_External` (boolean)
- `stateDescription` (string)
- `centerCode` (string)
- `modalityDescription` (string)
- `actionTypeDescription` (string)
- `actionLevelDescription` (string)

## TrainingGroupParticipantById

- `trainingGroupID` (string:uuid)
- `employeeID` (string:uuid)
- `reserve` (boolean)
- `comments` (string)
- `called_Done` (integer)
- `called_Date` (string:date-time)
- `called_Comments` (string)
- `test_Done` (boolean)
- `test_Date` (string:date-time)
- `test_Comments` (string)
- `certificate_Done` (integer)
- `certificate_Date` (string:date-time)
- `certificate_Comments` (string)
- `invitationMeans` (string)
- `company` (string)
- `name` (string)
- `organizationUnit` (string)
- `workplace` (string)
- `affiliationNumber` (string)
- `dateOfBirth` (string:date-time)
- `identifierNumber` (string)
- `totalPresent` (integer)
- `totalAbsent` (integer)
- `presence` (number:double)
- `addressEmail` (string)
- `firstName` (string)
- `secondName1` (string)
- `secondName2` (string)
- `personalCosts_ManualAutomatic` (boolean)
- `personalCosts_Cost` (number:double)
- `personalCosts_LabourHours` (number:double)
- `personalCosts_HourCost` (number:double)
- `employeeCode` (string)
- `sex` (string)
- `sexCode` (string)
- `retires` (boolean)
- `priorityEmployee` (boolean)
- `discapacity` (boolean)
- `functionalAreaId` (integer)
- `profCategoryId` (integer)
- `studiesLevelId` (integer)
- `otherTitles` (string)
- `functionalAreaDescription` (string)
- `profCategoryDescription` (string)
- `studiesLevelDescription` (string)
- `companyCIF` (string)
- `ssPaymentNumber` (string)
- `tariffGroupID` (integer)
- `disabilityLevel` (number:double)
- `tariffGroupDescription` (string)
- `cancelation` (integer)
- `modification` (integer)
- `other_Notices` (integer)
- `cancelation_Date` (string:date-time)
- `modification_Date` (string:date-time)
- `other_Notices_Date` (string:date-time)
- `cancelation_Media` (string)
- `modification_Media` (string)
- `other_Notices_Media` (string)
- `cancelation_Comments` (string)
- `modification_Comments` (string)
- `other_Notices_Comments` (string)
- `achievement_Certificate` (integer)
- `achievement_Certificate_Date` (string:date-time)
- `other_Certificate_Date` (string:date-time)
- `att_Certificate_Media` (string)
- `achievement_Certificate_Media` (string)
- `other_Certificate_Media` (string)
- `achievement_Certificate_Comments` (string)
- `other_Certificate_Comments` (string)
- `personalEmail` (string)
- `userId` (string)
- `other_Done` (integer)
- `niss` (string)
- `age` (integer)
- `classificationDescription` (string)
- `contributionTypeDescription` (string)
- `regimeDescription` (string)
- `terrorismVictim` (integer)
- `genderViolenceVictim` (integer)
- `phoneNumber` (string)
- `hasAccreditingDiploma` (boolean)
- `hasERTESituation` (boolean)
- `fijoDiscontinuo` (boolean)

## TrainingGroupParticitpantDigestResource

- `companyCode` (string)
- `workplaceCode` (string)
- `employeeCode` (string)
- `reserve` (boolean)
- `test_Done` (boolean)
- `certificate_Done` (boolean)
- `retires` (boolean)
- `priorityEmployee` (boolean)
- `discapacity` (boolean)
- `functionalAreaId` (integer)
- `profCategoryId` (integer)
- `studiesLevelId` (integer)
- `otherTitles` (string)
- `other_Done` (boolean)

## TrainingGroupParticitpantResource

- `companyCode` (string)
- `workplaceCode` (string)
- `employeeCode` (string)
- `reserve` (boolean)
- `comments` (string)
- `called_Done` (boolean)
- `called_Date` (string:date-time)
- `called_NotificationType` (integer)
- `called_Comments` (string)
- `test_Done` (boolean)
- `test_Date` (string:date-time)
- `test_Comments` (string)
- `certificate_Done` (boolean)
- `certificate_Date` (string:date-time)
- `certificate_Comments` (string)
- `personalCosts_HourCost` (number:double)
- `personalCosts_LabourHours` (number:double)
- `personalCosts_Cost` (number:double)
- `personalCosts_ManualAutomatic` (boolean)
- `retires` (boolean)
- `priorityEmployee` (boolean)
- `discapacity` (boolean)
- `functionalAreaId` (integer)
- `profCategoryId` (integer)
- `studiesLevelId` (integer)
- `otherTitles` (string)
- `other_Done` (boolean)
- `hasAccreditingDiploma` (boolean)

## TrainingGroupResource

- `trainingGroupId` (string:uuid)
- `code` (string)
- `name` (string)
- `year` (integer)
- `state` (integer)
- `comments` (string)
- `adress` (string)
- `postalCode` (string)
- `municipality` (string)
- `initDate` (string:date-time)
- `endDate` (string:date-time)
- `responsible` (string)
- `morningFrom` (string:date-time)
- `morningTo` (string:date-time)
- `afternoonFrom` (string:date-time)
- `afternoonTo` (string:date-time)
- `monday` (boolean)
- `tuesday` (boolean)
- `wednesday` (boolean)
- `thursday` (boolean)
- `friday` (boolean)
- `saturday` (boolean)
- `sunday` (boolean)
- `laborHours` (number:double)
- `timeTableComments` (string)
- `directCosts` (number:double)
- `asociatedCosts` (number:double)
- `personalCosts` (number:double)
- `personalCosts_Autom` (boolean)
- `portalPublished` (boolean)
- `portalPublishedOption` (boolean)
- `trainingPlace` (string)
- `notifiedFor` (boolean)
- `means_Company` (boolean)
- `means_OrgEntity` (boolean)
- `means_External` (boolean)
- `alternativeAddress` (boolean)
- `nifTutor` (string)
- `tutorGivenName` (string)
- `tutorFirstName1` (string)
- `tutorFirstName2` (string)
- `tutorHours` (number:double)
- `cif` (string)
- `ciF_grouped` (string)
- `country` (string)
- `organizationCosts` (number:double)
- `contactPhoneNumber` (string)
- `aulaVirtual_Means` (string)
- `aulaVirtual_Connnection` (string)
- `aulaVirtual_Contact` (string)
- `aulaVirtual_Phone` (string)

## UnemploymentDigestResource

- `unemploymentID` (string:uuid)
- `companyCode` (string)
- `workplaceCode` (string)
- `employeeCode` (string)
- `unemploymentTypeID` (integer)
- `unemploymentTypeDesc` (string)
- `startDate` (string:date-time)
- `endDate` (string:date-time)

## UnemploymentResource

- `unemploymentID` (string:uuid)
- `companyCode` (string)
- `workplaceCode` (string)
- `employeeCode` (string)
- `unemploymentTypeID` (integer)
- `unemploymentTypeDesc` (string)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `percentageUnemployment` (number:double)
- `taxableBaseCC` (number:double)
- `taxableBasePC` (number:double)
- `dismissalTypeID` (integer)
- `dismissalTypeDesc` (string)
- `numERE` (string)
- `ind55YearsContain` (boolean)
- `activityCoeficient` (string)
- `extinctionDate` (string:date-time)
- `reductionType` (string)
- `reductionTypeDesc` (string)
- `indForceMajeure` (boolean)
- `indCovid19` (boolean)
- `indContributionPeculiarityCause059` (boolean)
- `dateContributionPeculiarityCause059` (string:date-time)
- `indReincorporationTypeS` (boolean)
- `indReincorporationTypeR` (boolean)
- `indReincorporationTypeY` (boolean)
- `indReincorporationTypeU` (boolean)
- `indErteETOP` (boolean)
- `indContributionPeculiarityCause060` (boolean)
- `dateContributionPeculiarityCause060` (string:date-time)
- `indContributionPeculiarityCause061` (boolean)
- `dateContributionPeculiarityCause061` (string:date-time)
- `indContributionPeculiarityCause062` (boolean)
- `dateContributionPeculiarityCause062` (string:date-time)
- `indReincorporationTypeA3` (boolean)
- `indReincorporationTypeA4` (boolean)
- `indReincorporationTypeA5` (boolean)
- `indReincorporationTypeA6` (boolean)
- `indReincorporationTypeA9` (boolean)
- `indReincorporationTypeB1` (boolean)
- `indReincorporationTypeB2` (boolean)
- `indReincorporationTypeB3` (boolean)
- `indReincorporationTypeB6` (boolean)
- `indReincorporationTypeB7` (boolean)
- `indReincorporationTypeB8` (boolean)
- `indReincorporationTypeB9` (boolean)
- `indCovidOctober2020` (boolean)
- `indContributionPeculiarityCause067` (boolean)
- `dateContributionPeculiarityCause067` (string:date-time)
- `indReincorporationTypeC3` (boolean)
- `indContributionPeculiarityCause068` (boolean)
- `dateContributionPeculiarityCause068` (string:date-time)
- `indReincorporationTypeC9` (boolean)
- `indReincorporationTypeD1` (boolean)
- `indReincorporationTypeD2` (boolean)
- `indReincorporationTypeD3` (boolean)
- `indContributionPeculiarityCause069` (boolean)
- `dateContributionPeculiarityCause069` (string:date-time)
- `indReincorporationTypeD6` (boolean)
- `indReincorporationTypeD7` (boolean)
- `indReincorporationTypeD8` (boolean)
- `indReincorporationTypeD9` (boolean)
- `indContributionPeculiarityCause070` (boolean)
- `dateContributionPeculiarityCause070` (string:date-time)
- `indReincorporationTypeE3` (boolean)
- `indReincorporationTypeE4` (boolean)
- `indReincorporationTypeE5` (boolean)
- `indReincorporationTypeE6` (boolean)
- `indContributionPeculiarityCause071` (boolean)
- `dateContributionPeculiarityCause071` (string:date-time)
- `indReincorporationTypeE9` (boolean)
- `indReincorporationTypeF1` (boolean)
- `indReincorporationTypeF2` (boolean)
- `indReincorporationTypeF3` (boolean)
- `indContributionPeculiarityCause072` (boolean)
- `dateContributionPeculiarityCause072` (string:date-time)
- `indReincorporationTypeF6` (boolean)
- `indReincorporationTypeF7` (boolean)
- `indReincorporationTypeF8` (boolean)
- `indReincorporationTypeF9` (boolean)
- `indContributionPeculiarityCause073` (boolean)
- `dateContributionPeculiarityCause073` (string:date-time)
- `indReincorporationTypeG3` (boolean)
- `indReincorporationTypeG4` (boolean)
- `indReincorporationTypeG5` (boolean)
- `indReincorporationTypeG6` (boolean)
- `indContributionPeculiarityCause074` (boolean)
- `dateContributionPeculiarityCause074` (string:date-time)
- `indReincorporationTypeG9` (boolean)
- `indContributionPeculiarityCause075` (boolean)
- `dateContributionPeculiarityCause075` (string:date-time)
- `indReincorporationTypeH6` (boolean)
- `indReincorporationTypeH7` (boolean)
- `indReincorporationTypeH8` (boolean)
- `indReincorporationTypeH9` (boolean)
- `indContributionPeculiarityCause076` (boolean)
- `dateContributionPeculiarityCause076` (string:date-time)
- `indReincorporationTypeI3` (boolean)
- `indReincorporationTypeI4` (boolean)
- `indReincorporationTypeI5` (boolean)
- `indReincorporationTypeI6` (boolean)
- `indContributionPeculiarityCause077` (boolean)
- `dateContributionPeculiarityCause077` (string:date-time)
- `indReincorporationTypeI9` (boolean)
- `indReincorporationTypeJ1` (boolean)
- `indReincorporationTypeJ2` (boolean)
- `indReincorporationTypeJ3` (boolean)
- `indContributionPeculiarityCause078` (boolean)
- `dateContributionPeculiarityCause078` (string:date-time)
- `indReincorporationTypeJ6` (boolean)
- `indContributionPeculiarityCause079` (boolean)
- `dateContributionPeculiarityCause079` (string:date-time)
- `indReincorporationTypeK3` (boolean)
- `indReincorporationTypeK4` (boolean)
- `indReincorporationTypeK5` (boolean)
- `indReincorporationTypeK6` (boolean)
- `indContributionPeculiarityCause080` (boolean)
- `dateContributionPeculiarityCause080` (string:date-time)
- `indReincorporationTypeK9` (boolean)
- `indReincorporationTypeL1` (boolean)
- `indReincorporationTypeL2` (boolean)
- `indReincorporationTypeL3` (boolean)
- `indContributionPeculiarityCause081` (boolean)
- `dateContributionPeculiarityCause081` (string:date-time)
- `indReincorporationTypeL6` (boolean)
- `indReincorporationTypeL7` (boolean)
- `indReincorporationTypeL8` (boolean)
- `indReincorporationTypeL9` (boolean)
- `indContributionPeculiarityCause083` (boolean)
- `dateContributionPeculiarityCause083` (string:date-time)
- `indContributionPeculiarityCause084` (boolean)
- `dateContributionPeculiarityCause084` (string:date-time)
- `indContributionPeculiarityCause085` (boolean)
- `dateContributionPeculiarityCause085` (string:date-time)
- `indContributionPeculiarityCause086` (boolean)
- `dateContributionPeculiarityCause086` (string:date-time)
- `indContributionPeculiarityCause089` (boolean)
- `dateContributionPeculiarityCause089` (string:date-time)
- `indContributionPeculiarityCause090` (boolean)
- `dateContributionPeculiarityCause090` (string:date-time)
- `indContributionPeculiarityCause091` (boolean)
- `dateContributionPeculiarityCause091` (string:date-time)
- `indContributionPeculiarityCause092` (boolean)
- `dateContributionPeculiarityCause092` (string:date-time)
- `indTraining` (boolean)
- `trainingStartDate` (string:date-time)
- `trainingEndDate` (string:date-time)
- `indContributionPeculiarityCause087` (boolean)
- `dateContributionPeculiarityCause087` (string:date-time)
- `indContributionPeculiarityCause088` (boolean)
- `dateContributionPeculiarityCause088` (string:date-time)
- `indContributionPeculiarityCause095` (boolean)
- `dateContributionPeculiarityCause095` (string:date-time)
- `indContributionPeculiarityCause096` (boolean)
- `dateContributionPeculiarityCause096` (string:date-time)

## Unjustified

- `durationHours` (integer)
- `durationMinuts` (integer)
- `indCompanyContributionOnly` (boolean)
- `indLateCommunicationDrop` (boolean)
- `partialWorkdayPercentage` (number:double)

## UnjustifiedAbsenteeismCollectionItemResource

- `absenteeismID` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `lastUpdate` (string:date-time)

## UnjustifiedAbsenteeismEntityResource

- `absenteeismID` (string:uuid)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `indLessThanOneDay` (boolean)
- `durationHours` (integer)
- `durationMinuts` (integer)
- `indDiscountRestsWeekly` (boolean)
- `indDiscountNaturalDays` (boolean)
- `lastUpdate` (string:date-time)

## VacationDaysSumary

- `initalDays` (number:double)
- `previousYearDays` (number:double)
- `otherDays` (number:double)
- `total` (number:double)
- `observations` (string)

## VacationRequestModel

- `companyCode` (integer)
- `workplaceCode` (integer)
- `employeeCode` (string)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `indCanceled` (boolean)
- `year` (integer)
- `state` (string)
- `state_Date` (string:date-time)
- `description` (string)
- `observations` (string)

## VariableConceptsResource

- `contributionCollectionTypeID` (string)
- `conceptCode` (string)
- `startDate` (string:date-time)
- `endDate` (string:date-time)
- `collectionDate` (string:date-time)
- `payTypeId` (integer)
- `amount` (number:double)
- `units` (number:double)
- `prorateInPaySections` (boolean)
- `attribution` (string)
- `enrolmentDropProrate` (boolean)
- `variableConceptID` (string:uuid)

## VariableRemuneration

- `charged` (number:double)
- `imported` (number:double)
- `importedOverride` (string)
- `previousYear` (number:double)
- `previousYearOverride` (boolean)

## WithoutBreakdownsGetOutputEntityResource

- `contentFileBase64` (string)
- `warnings` (string)

## WorkplaceBankAccountCodeModel

- `bankAccountCode` (object)
- `is110` (object)
- `isTC1` (object)

## WorkplaceBankAccountModel

- `bank1` (string)
- `bank2` (string)
- `bank3` (string)
- `bank4` (string)
- `ibanSuffix` (string)
- `iban` (string)
- `bic` (string)
- `isBigAccount` (boolean)
