import {IFormConfiguration, IFormData} from "../../features/integration/types/Form/FormData";
import {CreationStrategy} from "../../features/integration/types/CreationStrategy";

export const MOCK_FORMDATA: IFormData = {
    "applicantData": {
        "accessCode": "code2",
        "address": "highstreet 22",
        "city": "Moria",
        "contactPerson": "donna",
        "email": "hello@world.no",
        "name": "Anakin Skywalker",
        "nationalIdentityNumber": "",
        "organisationNumber": "",
        "paragraph": "p3",
        "phoneNumber": "12345678",
        "postalCode": "1234",
        "protected": true,
        "type": "PERSON"
    },
    "caseData": {
        "accessCode": "code42",
        "administrativeUnit": "unit4",
        "archiveUnit": "unit3",
        "caseCreationStrategy": "NEW",
        "caseType": "casetype",
        "caseWorker": "rand",
        "paragraph": "number6",
        "primaryClass": "1class",
        "primaryClassification": "prim",
        "primaryTitle": "primTitle",
        "publicTitle": "public title",
        "recordUnit": "unit0",
        "secondaryClass": "2class",
        "secondaryClassification": "rose",
        "secondaryTitle": "secTitle",
        "status": "",
        "tertiaryClass": "3class",
        "tertiaryClassification": "everdeen",
        "tertiaryTitle": "tertTitle",
        "title": "Title of case"
    },
    "comment": "form to test mapping",
    "documentData": {
        "accessCode": "code2",
        "documentStatus": "D9",
        "paragraph": "p07",
        "title": "document title",
        "variant": "var"
    },
    "finished": false,
    "recordData": {
        "accessCode": "code89",
        "administrativeUnit": "unit33",
        "caseWorker": "boba",
        "documentType": "cat8",
        "paragraph": "p34",
        "publicTitle": "public record title",
        "recordStatus": "N",
        "recordType": "A",
        "title": "record title"
    },
    "sourceApplicationId": "Acos",
    "sourceApplicationIntegrationId": "VIK116"
}

export const MOCK_CONFIG_FORMDATA: IFormConfiguration = {
    completed: false,
    metadataId: 1,
    applicantData: {
        accessCode: "code2",
        address: "highstreet 22",
        city: "Moria",
        contactPerson: "donna",
        email: "hello@world.no",
        name: "Anakin Skywalker",
        nationalIdentityNumber: "",
        organisationNumber: "",
        paragraph: "p3",
        phoneNumber: "12345678",
        postalCode: "1234",
        protected: true,
        type: "PERSON"
    },
    caseData: {
        accessCode: "code42",
        administrativeUnit: "unit4",
        archiveUnit: "unit3",
        caseCreationStrategy: "NEW",
        caseType: "casetype",
        caseWorker: "rand",
        paragraph: "number6",
        primaryClass: "1class",
        primaryClassification: "prim",
        primaryTitle: "primTitle",
        publicTitle: "public title",
        recordUnit: "unit0",
        secondaryClass: "2class",
        secondaryClassification: "rose",
        secondaryTitle: "secTitle",
        status: "",
        tertiaryClass: "3class",
        tertiaryClassification: "everdeen",
        tertiaryTitle: "tertTitle",
        title: "Title of case"
    },
    comment: "form to test mapping",
    documentData: {
        accessCode: "code2",
        documentStatus: "D9",
        paragraph: "p07",
        title: "document title",
        variant: "var"
    },
    recordData: {
        accessCode: "code89",
        administrativeUnit: "unit33",
        caseWorker: "boba",
        documentType: "cat8",
        paragraph: "p34",
        publicTitle: "public record title",
        recordStatus: "N",
        recordType: "A",
        title: "record title"
    }
}

export const MOCK_FORMDATA_NOT_PUBLISHED: IFormData = {
    comment: 'form to test mapping not published',
    finished: false,
    caseData: {
        caseCreationStrategy: CreationStrategy.NEW,
        title: 'Title of case',
        publicTitle: 'public title',
        caseType: 'casetype',
        administrativeUnit: 'unit4',
        archiveUnit: 'unit3',
        recordUnit: 'unit0',
        accessCode: 'code42',
        paragraph: 'number6',
        caseWorker: 'rand',
        primaryClassification: 'prim',
        secondaryClassification: 'rose',
        tertiaryClassification: 'everdeen',
        primaryClass: '1class',
        secondaryClass: '2class',
        tertiaryClass: '3class',
        primaryTitle: 'primTitle',
        secondaryTitle: 'secTitle',
        tertiaryTitle: 'tertTitle'
    },
    recordData: {
        title: 'record title',
        publicTitle: 'public record title',
        documentType: 'cat8',
        administrativeUnit: 'unit33',
        recordStatus: 'N',
        recordType: "A",
        caseWorker: 'boba',
        accessCode: 'code89',
        paragraph: 'p34',
    },
    documentData: {
        title: 'document title',
        documentStatus: 'D9',
        documentCategory: 'sefg',
        accessCode: 'code2',
        paragraph: 'p07',
        variant: 'var'
    },
    applicantData: {
        protected: true,
        type: 'PERSON',
        name: 'Anakin Skywalker',
        address: 'highstreet 22',
        postalCode: '1234',
        city: 'Moria',
        contactPerson: 'donna',
        phoneNumber: '12345678',
        email: 'hello@world.no',
        accessCode: 'code2',
        paragraph: 'p3',
    }
}

export const MOCK_FORMDATA_PUBLISHED: IFormData = {
    comment: 'form to test mapping published',
    finished: true,
    caseData: {
        caseCreationStrategy: CreationStrategy.NEW,
        title: 'Title of case',
        publicTitle: 'public title',
        caseType: 'casetype',
        administrativeUnit: 'unit4',
        archiveUnit: 'unit3',
        recordUnit: 'unit0',
        accessCode: 'code42',
        paragraph: 'number6',
        caseWorker: 'rand',
        primaryClassification: 'prim',
        secondaryClassification: 'rose',
        tertiaryClassification: 'everdeen',
        primaryClass: '1class',
        secondaryClass: '2class',
        tertiaryClass: '3class',
        primaryTitle: 'primTitle',
        secondaryTitle: 'secTitle',
        tertiaryTitle: 'tertTitle'
    },
    recordData: {
        title: 'record title',
        publicTitle: 'public record title',
        documentType: 'cat8',
        administrativeUnit: 'unit33',
        recordStatus: 'N',
        recordType: "A",
        caseWorker: 'leia',
        accessCode: 'code89',
        paragraph: 'p34',
    },
    documentData: {
        title: 'document title',
        documentStatus: 'D9',
        accessCode: 'code2',
        paragraph: 'p07',
        variant: 'var'
    },
    applicantData: {
        protected: true,
        type: 'PERSON',
        name: 'Anakin Skywalker',
        address: 'highstreet 22',
        postalCode: '1234',
        city: 'Moria',
        contactPerson: 'bella',
        phoneNumber: '12345678',
        email: 'hello@world.no',
        accessCode: 'code2',
        paragraph: 'p3',
    }
}


export const MOCK_FORMDATA_WITH_TAGS: IFormData = {
    "applicantData": {
        "accessCode": "code2",
        "address": "highstreet 22",
        "city": "Moria",
        "contactPerson": "donna",
        "email": "hello@world.no",
        "name": "Luke Skywalker",
        "nationalIdentityNumber": "",
        "organisationNumber": "123456789",
        "paragraph": "p3",
        "phoneNumber": "12345678",
        "postalCode": "1234",
        "protected": true,
        "type": "ORGANISATION"
    },
    "caseData": {
        "accessCode": "code42",
        "administrativeUnit": "unit4",
        "archiveUnit": "unit3",
        "caseCreationStrategy": "NEW",
        "caseType": "casetype",
        "caseWorker": "rand",
        "paragraph": "number6",
        "primaryClass": "1class",
        "primaryClassification": "prim",
        "primaryTitle": "primTitle",
        "publicTitle": "public title also with {two} {tags}",
        "recordUnit": "unit0",
        "secondaryClass": "2class",
        "secondaryClassification": "rose",
        "secondaryTitle": "secTitle",
        "status": "",
        "tertiaryClass": "3class",
        "tertiaryClassification": "everdeen",
        "tertiaryTitle": "tertTitle",
        "title": "Title of case with {tags}"
    },
    "comment": "form to test mapping with form tags",
    "completed": false,
    "documentData": {
        "accessCode": "code3",
        "documentStatus": "D9",
        "paragraph": "p02",
        "title": "document title",
        "variant": "var6"
    },
    "recordData": {
        "accessCode": "code89",
        "administrativeUnit": "unit33",
        "caseWorker": "mando",
        "documentType": "cat8",
        "paragraph": "p34",
        "publicTitle": "{singletag}",
        "recordStatus": "N",
        "recordType": "A",
        "title": "{just} {tags}"
    }
}

export const MOCK_NEW_FORMDATA: IFormConfiguration = {
    applicantData: {},
    caseData: {
        recordUnit: "https://beta.felleskomponent.no/arkiv/noark/administrativenhet/systemid/191",
        title: "{foo} {bar} {bubu}"
    },
    comment: "Ferdigstilt ",
    completed: true,
    documentData: {},
    recordData: {
        title: "{foo} bar"
    }
}
