import {IFormConfiguration} from "../../../configuration/types/Form/FormData"
import {IConfiguration} from "../../../configuration/types/Configuration";
import {
    addressDataToRecord,
    caseDataToRecord,
    classDataToRecord,
    contactInfoDataToRecord,
    correspondentDataToRecord,
    documentDescriptionDataToRecord,
    documentObjectDataToRecord,
    newCaseDataToRecord,
    recordDataToRecord,
    shieldingDataToRecord
} from "../helpers/toValueMappingRecord";
import {
    filterObjectCollectionMappingEntries,
    filterObjectMappingEntries,
    shouldIncludeObjectMapping,
    shouldIncludeObjectsFromCollectionMapping
} from "../helpers/filters";

export function toAVConfiguration(data: IFormConfiguration, integrationId: string, configurationId: any, metadataId: number): IConfiguration {
    return {
        integrationId: integrationId,
        id: configurationId,
        completed: data.completed,
        integrationMetadataId: metadataId,
        comment: data.comment,
        mapping:
            {
                valueMappingPerKey: {},
                valueCollectionMappingPerKey: {},
                objectMappingPerKey: filterObjectMappingEntries({
                    "sak": {
                        valueMappingPerKey: caseDataToRecord(data.caseData),
                        valueCollectionMappingPerKey: {},
                        objectMappingPerKey: filterObjectMappingEntries({
                            "ny": {
                                valueMappingPerKey: newCaseDataToRecord(data.caseData.newCase),
                                valueCollectionMappingPerKey: {},
                                objectMappingPerKey: filterObjectMappingEntries({
                                    "skjerming": {
                                        valueMappingPerKey: shieldingDataToRecord(data.caseData.newCase.shielding),
                                        valueCollectionMappingPerKey: {},
                                        objectMappingPerKey: {},
                                        objectCollectionMappingPerKey: {}
                                    }
                                }),
                                objectCollectionMappingPerKey: filterObjectCollectionMappingEntries({
                                    "klasse": {
                                        fromCollectionMappings: [],
                                        elementMappings: [
                                            {
                                                valueMappingPerKey: classDataToRecord(data.caseData.newCase.classes[0], "0"),
                                                valueCollectionMappingPerKey: {},
                                                objectMappingPerKey: {},
                                                objectCollectionMappingPerKey: {}
                                            }, {
                                                valueMappingPerKey: classDataToRecord(data.caseData.newCase.classes[1], "1"),
                                                valueCollectionMappingPerKey: {},
                                                objectMappingPerKey: {},
                                                objectCollectionMappingPerKey: {}
                                            }, {
                                                valueMappingPerKey: classDataToRecord(data.caseData.newCase.classes[2], "2"),
                                                valueCollectionMappingPerKey: {},
                                                objectMappingPerKey: {},
                                                objectCollectionMappingPerKey: {}
                                            }
                                        ].filter(shouldIncludeObjectMapping)
                                    }
                                })
                            }
                        }),
                        objectCollectionMappingPerKey: {}
                    },
                    "journalpost": {
                        valueMappingPerKey: recordDataToRecord(data.recordData),
                        valueCollectionMappingPerKey: {},
                        objectMappingPerKey: filterObjectMappingEntries({
                            "skjerming": {
                                valueMappingPerKey: shieldingDataToRecord(data.recordData.shielding),
                                valueCollectionMappingPerKey: {},
                                objectMappingPerKey: {},
                                objectCollectionMappingPerKey: {}
                            }
                        }),
                        objectCollectionMappingPerKey: filterObjectCollectionMappingEntries({
                            "dokumentbeskrivelse": {
                                elementMappings: [
                                    {
                                        valueMappingPerKey: documentDescriptionDataToRecord(data.recordData.mainDocument),
                                        valueCollectionMappingPerKey: {},
                                        objectMappingPerKey: {},
                                        objectCollectionMappingPerKey: {
                                            "dokumentobjekt": {
                                                elementMappings: [
                                                    {
                                                        valueMappingPerKey: documentObjectDataToRecord(data.recordData.mainDocument),
                                                        valueCollectionMappingPerKey: {},
                                                        objectMappingPerKey: {},
                                                        objectCollectionMappingPerKey: {}
                                                    }
                                                ],
                                                fromCollectionMappings: []
                                            }
                                        }
                                    }
                                ].filter(shouldIncludeObjectMapping),
                                fromCollectionMappings: [
                                    {
                                        instanceCollectionReferencesOrdered: ["$if{vedlegg}"],
                                        elementMapping: {
                                            valueMappingPerKey: documentDescriptionDataToRecord(data.recordData.attachmentDocuments),
                                            valueCollectionMappingPerKey: {},
                                            objectMappingPerKey: {},
                                            objectCollectionMappingPerKey: filterObjectCollectionMappingEntries({
                                                "dokumentobjekt": {
                                                    elementMappings: [
                                                        {
                                                            valueMappingPerKey: documentObjectDataToRecord(data.recordData.attachmentDocuments),
                                                            valueCollectionMappingPerKey: {},
                                                            objectMappingPerKey: {},
                                                            objectCollectionMappingPerKey: {}
                                                        }
                                                    ].filter(shouldIncludeObjectMapping),
                                                    fromCollectionMappings: []
                                                }
                                            })
                                        }
                                    }
                                ].filter(shouldIncludeObjectsFromCollectionMapping)

                            },
                            "korrespondansepart": {
                                elementMappings: [{
                                    valueMappingPerKey: correspondentDataToRecord(data.recordData.correspondent),
                                    valueCollectionMappingPerKey: {},
                                    objectMappingPerKey: filterObjectMappingEntries({
                                        "adresse": {
                                            valueMappingPerKey: addressDataToRecord(data.recordData.correspondent),
                                            valueCollectionMappingPerKey: {},
                                            objectMappingPerKey: {},
                                            objectCollectionMappingPerKey: {}
                                        },
                                        "kontaktinformasjon": {
                                            valueMappingPerKey: contactInfoDataToRecord(data.recordData.correspondent),
                                            valueCollectionMappingPerKey: {},
                                            objectMappingPerKey: {},
                                            objectCollectionMappingPerKey: {}
                                        },
                                        "skjerming": data.recordData.correspondent.shielding ? {
                                            valueMappingPerKey: shieldingDataToRecord(data.recordData.correspondent.shielding),
                                            valueCollectionMappingPerKey: {},
                                            objectMappingPerKey: {},
                                            objectCollectionMappingPerKey: {}
                                        } : {
                                            valueMappingPerKey: {},
                                            valueCollectionMappingPerKey: {},
                                            objectMappingPerKey: {},
                                            objectCollectionMappingPerKey: {}
                                        }
                                    }),
                                    objectCollectionMappingPerKey: {}
                                }].filter(shouldIncludeObjectMapping),
                                fromCollectionMappings: []
                            }
                        })
                    }
                }),
                objectCollectionMappingPerKey: {}
            }

    }
}

export function toAVConfigurationPatch(data: IFormConfiguration, metadataId: any): IConfiguration {
    return {
        completed: data.completed,
        integrationMetadataId: metadataId,
        comment: data.comment,
        mapping: {
            valueMappingPerKey: {},
            valueCollectionMappingPerKey: {},
            objectMappingPerKey: filterObjectMappingEntries({
                "sak": {
                    valueMappingPerKey: caseDataToRecord(data.caseData),
                    valueCollectionMappingPerKey: {},
                    objectMappingPerKey: filterObjectMappingEntries({
                        "ny": {
                            valueMappingPerKey: newCaseDataToRecord(data.caseData.newCase),
                            valueCollectionMappingPerKey: {},
                            objectMappingPerKey: filterObjectMappingEntries({
                                "skjerming": {
                                    valueMappingPerKey: shieldingDataToRecord(data.caseData.newCase.shielding),
                                    valueCollectionMappingPerKey: {},
                                    objectMappingPerKey: {},
                                    objectCollectionMappingPerKey: {}
                                }
                            }),
                            objectCollectionMappingPerKey: filterObjectCollectionMappingEntries({
                                "klasse": {
                                    fromCollectionMappings: [],
                                    elementMappings: [
                                        {
                                            valueMappingPerKey: classDataToRecord(data.caseData.newCase.classes[0], "0"),
                                            valueCollectionMappingPerKey: {},
                                            objectMappingPerKey: {},
                                            objectCollectionMappingPerKey: {}
                                        }, {
                                            valueMappingPerKey: classDataToRecord(data.caseData.newCase.classes[1], "1"),
                                            valueCollectionMappingPerKey: {},
                                            objectMappingPerKey: {},
                                            objectCollectionMappingPerKey: {}
                                        }, {
                                            valueMappingPerKey: classDataToRecord(data.caseData.newCase.classes[2], "2"),
                                            valueCollectionMappingPerKey: {},
                                            objectMappingPerKey: {},
                                            objectCollectionMappingPerKey: {}
                                        }
                                    ].filter(shouldIncludeObjectMapping)
                                }
                            })
                        }
                    }),
                    objectCollectionMappingPerKey: {}
                },
                "journalpost": {
                    valueMappingPerKey: recordDataToRecord(data.recordData),
                    valueCollectionMappingPerKey: {},
                    objectMappingPerKey: filterObjectMappingEntries({
                        "skjerming": {
                            valueMappingPerKey: shieldingDataToRecord(data.recordData.shielding),
                            valueCollectionMappingPerKey: {},
                            objectMappingPerKey: {},
                            objectCollectionMappingPerKey: {}
                        }
                    }),
                    objectCollectionMappingPerKey: filterObjectCollectionMappingEntries({
                        "dokumentbeskrivelse": {
                            elementMappings: [
                                {
                                    valueMappingPerKey: documentDescriptionDataToRecord(data.recordData.mainDocument),
                                    valueCollectionMappingPerKey: {},
                                    objectMappingPerKey: {},
                                    objectCollectionMappingPerKey: {
                                        "dokumentobjekt": {
                                            elementMappings: [
                                                {
                                                    valueMappingPerKey: documentObjectDataToRecord(data.recordData.mainDocument),
                                                    valueCollectionMappingPerKey: {},
                                                    objectMappingPerKey: {},
                                                    objectCollectionMappingPerKey: {}
                                                }
                                            ],
                                            fromCollectionMappings: []
                                        }
                                    }
                                }
                            ].filter(shouldIncludeObjectMapping),
                            fromCollectionMappings: [
                                {
                                    instanceCollectionReferencesOrdered: ["$if{vedlegg}"],
                                    elementMapping: {
                                        valueMappingPerKey: documentDescriptionDataToRecord(data.recordData.attachmentDocuments),
                                        valueCollectionMappingPerKey: {},
                                        objectMappingPerKey: {},
                                        objectCollectionMappingPerKey: filterObjectCollectionMappingEntries({
                                            "dokumentobjekt": {
                                                elementMappings: [
                                                    {
                                                        valueMappingPerKey: documentObjectDataToRecord(data.recordData.attachmentDocuments),
                                                        valueCollectionMappingPerKey: {},
                                                        objectMappingPerKey: {},
                                                        objectCollectionMappingPerKey: {}
                                                    }
                                                ].filter(shouldIncludeObjectMapping),
                                                fromCollectionMappings: []
                                            }
                                        })
                                    }
                                }
                            ].filter(shouldIncludeObjectsFromCollectionMapping)

                        },
                        "korrespondansepart": {
                            elementMappings: [{
                                valueMappingPerKey: correspondentDataToRecord(data.recordData.correspondent),
                                valueCollectionMappingPerKey: {},
                                objectMappingPerKey: filterObjectMappingEntries({
                                    "adresse": {
                                        valueMappingPerKey: addressDataToRecord(data.recordData.correspondent),
                                        valueCollectionMappingPerKey: {},
                                        objectMappingPerKey: {},
                                        objectCollectionMappingPerKey: {}
                                    },
                                    "kontaktinformasjon": {
                                        valueMappingPerKey: contactInfoDataToRecord(data.recordData.correspondent),
                                        valueCollectionMappingPerKey: {},
                                        objectMappingPerKey: {},
                                        objectCollectionMappingPerKey: {}
                                    },
                                    "skjerming": data.recordData.correspondent.shielding ? {
                                        valueMappingPerKey: shieldingDataToRecord(data.recordData.correspondent.shielding),
                                        valueCollectionMappingPerKey: {},
                                        objectMappingPerKey: {},
                                        objectCollectionMappingPerKey: {}
                                    } : {
                                        valueMappingPerKey: {},
                                        valueCollectionMappingPerKey: {},
                                        objectMappingPerKey: {},
                                        objectCollectionMappingPerKey: {}
                                    }
                                }),
                                objectCollectionMappingPerKey: {}
                            }].filter(shouldIncludeObjectMapping),
                            fromCollectionMappings: []
                        }
                    })
                }
            }),
            objectCollectionMappingPerKey: {}
        }
    }
}