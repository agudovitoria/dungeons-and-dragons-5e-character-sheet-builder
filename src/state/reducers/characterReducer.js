import {
  SET_ALIGNMENT_ACTION_TYPE,
  SET_ATTRIBUTE_CHARISMA_ACTION_TYPE,
  SET_ATTRIBUTE_CONSTITUTION_ACTION_TYPE,
  SET_ATTRIBUTE_DEXTERITY_ACTION_TYPE,
  SET_ATTRIBUTE_INTELLIGENTE_ACTION_TYPE,
  SET_ATTRIBUTE_STRENGTH_ACTION_TYPE,
  SET_ATTRIBUTE_WISDOM_ACTION_TYPE,
  SET_CLASS_ACTION_TYPE,
  SET_MODIFIER_CHARISMA_ACTION_TYPE,
  SET_MODIFIER_CONSTITUTION_ACTION_TYPE,
  SET_MODIFIER_DEXTERITY_ACTION_TYPE,
  SET_MODIFIER_INTELLIGENTE_ACTION_TYPE,
  SET_MODIFIER_STRENGTH_ACTION_TYPE,
  SET_MODIFIER_WISDOM_ACTION_TYPE,
  SET_NAME_ACTION_TYPE,
  SET_RACE_ACTION_TYPE,
  SET_PLAYER_NAME_ACTION_TYPE
} from '../actions/characterActions';

import {
  getStatsByRace
} from '../../engine/stats';

export const characterInitialState = {
  alignment: null,
  attributes: {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  },
  class: null,
  inspiration: false,
  level: 1,
  modifiers: {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  },
  name: null,
  perception: 10,
  playerName: null,
  proficiency: 0,
  race: null,
  xp: 0
};

export const characterReducer = (state, { type, payload }) => {
  switch(type) {
    case SET_ALIGNMENT_ACTION_TYPE: {
      return {
        ...state,
        alignment: payload
      };
    }

    case SET_ATTRIBUTE_CHARISMA_ACTION_TYPE: {
      return {
        ...state,
        attributes: {
          ...state.attributes,
          charisma: payload
        }
      };
    }

    case SET_ATTRIBUTE_CONSTITUTION_ACTION_TYPE: {
      return {
        ...state,
        attributes: {
          ...state.attributes,
          constitution: payload
        }
      };
    }
    
    case SET_ATTRIBUTE_DEXTERITY_ACTION_TYPE: {
      return {
        ...state,
        attributes: {
          ...state.attributes,
          dexterity: payload
        }
      };
    }
    
    case SET_ATTRIBUTE_INTELLIGENTE_ACTION_TYPE: {
      return {
        ...state,
        attributes: {
          ...state.attributes,
          intelligence: payload
        }
      };
    }
    
    case SET_ATTRIBUTE_STRENGTH_ACTION_TYPE: {
      return {
        ...state,
        attributes: {
          ...state.attributes,
          strength: payload
        }
      };
    }
    
    case SET_ATTRIBUTE_WISDOM_ACTION_TYPE: {
      return {
        ...state,
        attributes: {
          ...state.attributes,
          wisdom: payload
        }
      };
    }
    
    case SET_CLASS_ACTION_TYPE: {
      return {
        ...state,
        class: payload
      };
    }
    
    case SET_MODIFIER_CHARISMA_ACTION_TYPE: {
      return {
        ...state,
        modifiers: {
          ...state.attributes,
          charisma: payload
        }
      };
    }
    
    case SET_MODIFIER_CONSTITUTION_ACTION_TYPE: {
      return {
        ...state,
        modifiers: {
          ...state.attributes,
          constitution: payload
        }
      };
    }
    
    case SET_MODIFIER_DEXTERITY_ACTION_TYPE: {
      return {
        ...state,
        modifiers: {
          ...state.attributes,
          dexterity: payload
        }
      };
    }
    
    case SET_MODIFIER_INTELLIGENTE_ACTION_TYPE: {
      return {
        ...state,
        modifiers: {
          ...state.attributes,
          intelligence: payload
        }
      };
    }
    
    case SET_MODIFIER_STRENGTH_ACTION_TYPE: {
      return {
        ...state,
        modifiers: {
          ...state.attributes,
          strength: payload
        }
      };
    }
    
    case SET_MODIFIER_WISDOM_ACTION_TYPE: {
      return {
        ...state,
        modifiers: {
          ...state.attributes,
          wisdom: payload
        }
      };
    }
    
    case SET_NAME_ACTION_TYPE: {
      return {
        ...state,
        name: payload
      };
    }
    
    case SET_RACE_ACTION_TYPE: {
      const {
        charisma,
        constitution,
        dexterity,
        intelligence,
        strength,
        wisdom
      } = getStatsByRace(payload);

      return {
        ...state,
        modifiers: {
          charisma,
          constitution,
          dexterity,
          intelligence,
          strength,
          wisdom
        },
        race: payload
      };
    }
    
    case SET_PLAYER_NAME_ACTION_TYPE: {
      return {
        ...state,
        playerName: payload
      };
    }

    default: {
      return characterInitialState;
    }
  }
};