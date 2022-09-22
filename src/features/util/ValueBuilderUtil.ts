import {ValueBuilder} from "../integration/types/ValueBuilder";
import {IProperty} from "../integration/types/Property";
import {IField} from "../integration/types/Field";
import {IConfigurationField} from "../integration/types/Configuration";

export function createValueBuilder(inputString: any): ValueBuilder {
    let foundTags;
    let stringWithReplacedTags = "";

    if (inputString) {
        foundTags = inputString.match(/[^{}]+(?=})/g)
        stringWithReplacedTags = inputString.replaceAll(/({[^{]*?)\w(?=})}/g, "%s")
    }
    return {
        value: stringWithReplacedTags,
        properties: foundTags ? foundTags.map((tag: any, index: number): IProperty => {
            return {
                key: tag,
                order: index
            }
        }) : []
    }
}

export function toValueString(inputValue: ValueBuilder): string {
    let valueString = inputValue.value? inputValue.value : '';
    if (valueString !== '' && inputValue.properties !== undefined) {
        let helperString;
        inputValue.properties?.map((property => {
            helperString = valueString?.replace("%s", '{' + property.key + '}')
            valueString = helperString;
        }))
    }
    return valueString;
}

export function fieldToString(configuration: any, configurationField: string, valueString?: boolean): string {
    const fields = configuration.fields.filter((field: IField) => field.field === configurationField)
    if (valueString) {
        return fields.length > 0 ? toValueString(fields[0].valueBuilder) : '';
    }
    return fields.length > 0 ? fields[0].valueBuilder.value : '';
}

export function newFieldToString(configuration: IConfigurationField[], configurationField: string, valueString?: boolean): string {
    if(configuration[0] !== undefined && configuration[0].children) {
        const configField = configuration[0].children.filter((configField) => configField.key === configurationField)
        if (valueString && configField[0] !== undefined && configField[0].valueBuilder) {
            return configField.length > 0 ? toValueString(configField[0].valueBuilder) : '';
        }
        return (configField.length > 0 && configField[0].valueBuilder?.value) ? configField[0].valueBuilder?.value : '';
    }
    return '';
}
