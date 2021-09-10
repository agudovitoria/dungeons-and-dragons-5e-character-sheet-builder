export const SET_ALIGNMENT_ACTION_TYPE = 'character-set-alignment-action';

export const SET_ATTRIBUTE_CHARISMA_ACTION_TYPE = 'character-set-attribute-charisma-action';
export const SET_ATTRIBUTE_CONSTITUTION_ACTION_TYPE = 'character-set-attribute-constitution-action';
export const SET_ATTRIBUTE_DEXTERITY_ACTION_TYPE = 'character-set-attribute-dexterity-action';
export const SET_ATTRIBUTE_INTELLIGENTE_ACTION_TYPE = 'character-set-attribute-intelligence-action';
export const SET_ATTRIBUTE_STRENGTH_ACTION_TYPE = 'character-set-attribute-strength-action';
export const SET_ATTRIBUTE_WISDOM_ACTION_TYPE = 'character-set-attribute-wisdom-action';

export const SET_CLASS_ACTION_TYPE = 'character-set-class-action';

export const SET_MODIFIER_CHARISMA_ACTION_TYPE = 'character-set-modifier-charisma-action';
export const SET_MODIFIER_CONSTITUTION_ACTION_TYPE = 'character-set-modifier-constitution-action';
export const SET_MODIFIER_DEXTERITY_ACTION_TYPE = 'character-set-modifier-dexterity-action';
export const SET_MODIFIER_INTELLIGENTE_ACTION_TYPE = 'character-set-modifier-intelligence-action';
export const SET_MODIFIER_STRENGTH_ACTION_TYPE = 'character-set-modifier-strength-action';
export const SET_MODIFIER_WISDOM_ACTION_TYPE = 'character-set-modifier-wisdom-action';

export const SET_NAME_ACTION_TYPE = 'character-set-name-action';

export const SET_RACE_ACTION_TYPE = 'character-set-race-action';

export const SET_PLAYER_NAME_ACTION_TYPE = 'character-set-player-name-action';

export const setAlignmentAction = alignment => ({
  type: SET_ALIGNMENT_ACTION_TYPE,
  payload: alignment
});

export const setAttributeCharismaAction = charisma => ({
  type: SET_ATTRIBUTE_CHARISMA_ACTION_TYPE,
  payload: charisma
});

export const setAttributeConstitutionAction = constitution => ({
  type: SET_ATTRIBUTE_CONSTITUTION_ACTION_TYPE,
  payload: constitution
});

export const setAttributeDexterityAction = dexterity => ({
  type: SET_ATTRIBUTE_DEXTERITY_ACTION_TYPE,
  payload: dexterity
});

export const setAttributeIntelligenceAction = intelligence => ({
  type: SET_ATTRIBUTE_INTELLIGENTE_ACTION_TYPE,
  payload: intelligence
});

export const setAttributeStrengthAction = strength => ({
  type: SET_ATTRIBUTE_STRENGTH_ACTION_TYPE,
  payload: strength
});

export const setAttributeWisdomAction = wisdom => ({
  type: SET_ATTRIBUTE_WISDOM_ACTION_TYPE,
  payload: wisdom
});

export const setClassAction = clazz => ({
  type: SET_CLASS_ACTION_TYPE,
  payload: clazz
});

export const setModifierCharismaAction = charisma => ({
  type: SET_MODIFIER_CHARISMA_ACTION_TYPE,
  payload: charisma
});

export const setModifierConstitutionAction = constitution => ({
  type: SET_MODIFIER_CONSTITUTION_ACTION_TYPE,
  payload: constitution
});

export const setModifierDexterityAction = dexterity => ({
  type: SET_MODIFIER_DEXTERITY_ACTION_TYPE,
  payload: dexterity
});

export const setModifierIntelligenceAction = intelligence => ({
  type: SET_MODIFIER_INTELLIGENTE_ACTION_TYPE,
  payload: intelligence
});

export const setModifierStrengthAction = strength => ({
  type: SET_MODIFIER_STRENGTH_ACTION_TYPE,
  payload: strength
});

export const setModifierWisdomAction = wisdom => ({
  type: SET_MODIFIER_WISDOM_ACTION_TYPE,
  payload: wisdom
});

export const setNameAction = name => ({
  type: SET_NAME_ACTION_TYPE,
  payload: name
});

export const setRaceAction = race => ({
  type: SET_RACE_ACTION_TYPE,
  payload: race
});

export const setPlayerNameAction = name => ({
  type: SET_PLAYER_NAME_ACTION_TYPE,
  payload: name
});
