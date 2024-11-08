/*
    Adding new input field and requirement:
    - Create field requirements object with key: requirement name, value: false. 
            const exampleFieldRequirements = {
	            isDigitOnly: false,
            };

    - Add input field name as key into requirementsMapper then add field requirement object as value.
    exampleField -> it is input field name
                requirementsMapper = {
                    exampleField: exampleFieldRequirements
            };

    - Create new property with input field name as key into fieldRequirementsKeysAndMessages than create array with nested array in it with two elements:
        -- first element should be key from field requirements object: isDigitOnly for example
        -- second element should be requirement message which will be shown into component.
                const fieldRequirementKeysAndMessages = {
	                age: [
                        ["isDigitOnly", "Field should contain only digits!"]
                    ],
                }
    Adding new requirement for existing input field:
    -- Add new property into existing field requirements object: isLessThanZero = false
    -- Create array with two elements: [isLessThanZero, 'Number should be less than zero']
    -- fieldRequirementKeysAndMessages on key [input name] add created array
*/

const ageFieldRequirements = {
	isNumberRangeValid: false,
};

const heightFieldRequirements = {
	isNumberRangeValid: false,
};

const currentWeightFieldRequirements = {
	isNumberRangeValid: false,
};

const targetWeightFieldRequirements = {
	isNumberRangeValid: false,
};

const caloriesGoalFieldRequirements = {
	isNumberRangeValid: false,
};

// Map field name with it's requirements
export const requirementsMapper = {
	age: ageFieldRequirements,
	height: heightFieldRequirements,
	currentWeight: currentWeightFieldRequirements,
	targetWeight: targetWeightFieldRequirements,
	caloriesGoal: caloriesGoalFieldRequirements,
};

/* key: is an input field. value: matrix which contains array for every requirement for that input field
    index[0] contains requirement name. Name is key used in requirementsMapper object.
    index[1] contains requirement message which will be displayed in the component.
*/
export const fieldRequirementKeysAndMessages = {
	age: [["isNumberRangeValid", "Enter age between 1 and 100"]],

	height: [["isNumberRangeValid", "Enter height between 100 and 270 cm"]],
};
