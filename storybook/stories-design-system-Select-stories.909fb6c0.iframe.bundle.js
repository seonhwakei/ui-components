"use strict";(self.webpackChunknadoo_io=self.webpackChunknadoo_io||[]).push([[571],{"./packages/ui-components/src/stories/design-system/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,Disabled:()=>Disabled,FullWidth:()=>FullWidth,Required:()=>Required,SizeAndVariantCombinations:()=>SizeAndVariantCombinations,SlotOverridesExample:()=>SlotOverridesExample,States:()=>States,StylePropExample:()=>StylePropExample,WithDefaultValue:()=>WithDefaultValue,WithDisabledItems:()=>WithDisabledItems,WithError:()=>WithError,WithHelpText:()=>WithHelpText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_States$parameters,_States$parameters2,_WithError$parameters,_WithError$parameters2,_WithHelpText$paramet,_WithHelpText$paramet2,_Disabled$parameters,_Disabled$parameters2,_FullWidth$parameters,_FullWidth$parameters2,_WithDisabledItems$pa,_WithDisabledItems$pa2,_Required$parameters,_Required$parameters2,_SizeAndVariantCombin,_SizeAndVariantCombin2,_WithDefaultValue$par,_WithDefaultValue$par2,_Controlled$parameter,_Controlled$parameter2,_SlotOverridesExample,_SlotOverridesExample2,_StylePropExample$par,_StylePropExample$par2,_Users_shkim_Documents_nadooio_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_design_system_Select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui-components/src/design-system/Select/index.ts"),console=__webpack_require__("./node_modules/node-polyfill-webpack-plugin/node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_shkim_Documents_nadooio_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Input/Select",component:_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["outlined","filled","underlined"],description:"Select component style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Select component size"},disabled:{control:"boolean",description:"Select component disabled state"},error:{control:"boolean",description:"Error state"},fullWidth:{control:"boolean",description:"Whether the select takes full width"},required:{control:"boolean",description:"Required selection"},onValueChange:{action:"changed"}}};var fruitItems=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"strawberry",label:"Strawberry"}],Default={args:{label:"Fruit Selection",placeholder:"Please select a fruit",items:fruitItems,variant:"outlined",size:"md"},parameters:{docs:{description:{story:"Basic usage of Select component."},source:{code:'<Select label="Fruit Selection" items={fruitItems} />'}}}},States={render:function render(){return __jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Default State",placeholder:"Default State",items:fruitItems}),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Error State",placeholder:"Error State",error:!0,items:fruitItems}),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Disabled State",placeholder:"Disabled State",disabled:!0,items:fruitItems}))}},WithError={args:{label:"Error Select",placeholder:"Please select a fruit",items:fruitItems,error:!0,helperText:"Please select a fruit"}},WithHelpText={args:{label:"Help Text Select",placeholder:"Please select a fruit",items:fruitItems,helperText:"Please select a fruit."}},Disabled={args:{label:"Disabled Select",placeholder:"Cannot be selected",items:fruitItems,disabled:!0}},FullWidth={args:{label:"Full Width Select",placeholder:"This select will take up the full width of its parent element",items:fruitItems,fullWidth:!0}},WithDisabledItems={args:{label:"Disabled Options Select",placeholder:"Cannot be selected",items:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana",disabled:!0},{value:"orange",label:"Orange"},{value:"grape",label:"Grape",disabled:!0},{value:"strawberry",label:"Strawberry"}]}},Required={args:{label:"Required Select",placeholder:"Must be selected",items:fruitItems,required:!0}},SizeAndVariantCombinations={render:function render(){return __jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},__jsx("div",null,__jsx("h3",{style:{marginBottom:"12px"}},"Outlined Variant"),__jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Small Outlined",placeholder:"Small Outlined",size:"sm",variant:"outlined",items:fruitItems}),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Medium Outlined",placeholder:"Medium Outlined",size:"md",variant:"outlined",items:fruitItems}),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Large Outlined",placeholder:"Large Outlined",size:"lg",variant:"outlined",items:fruitItems}))),__jsx("div",null,__jsx("h3",{style:{marginBottom:"12px"}},"Filled Variant"),__jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Small Filled",placeholder:"Small Filled",size:"sm",variant:"filled",items:fruitItems}),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Medium Filled",placeholder:"Medium Filled",size:"md",variant:"filled",items:fruitItems}),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Large Filled",placeholder:"Large Filled",size:"lg",variant:"filled",items:fruitItems}))),__jsx("div",null,__jsx("h3",{style:{marginBottom:"12px"}},"Underlined Variant"),__jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Small Underlined",placeholder:"Small Underlined",size:"sm",variant:"underlined",items:fruitItems}),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Medium Underlined",placeholder:"Medium Underlined",size:"md",variant:"underlined",items:fruitItems}),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Large Underlined",placeholder:"Large Underlined",size:"lg",variant:"underlined",items:fruitItems}))))}},WithDefaultValue={render:function render(){return __jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Select with Default Value",items:fruitItems,defaultValue:"banana"}))}},Controlled={render:function render(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("apple"),value=_useState[0],setValue=_useState[1],handleValueChange=function handleValueChange(newValue){setValue(newValue),console.log("Selected value:",newValue)};return __jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},__jsx("div",null,__jsx("p",null,"Selected value: ",value),__jsx(_design_system_Select__WEBPACK_IMPORTED_MODULE_2__.Ph,{label:"Controlled Select",items:fruitItems,value,onValueChange:handleValueChange})),__jsx("div",{style:{display:"flex",gap:"8px"}},fruitItems.map((function(item){return __jsx("button",{key:item.value,onClick:function onClick(){return handleValueChange(item.value)},style:{padding:"4px 8px",border:"1px solid #ccc",borderRadius:"4px",background:value===item.value?"#e0e0ff":"white"}},"Change to ",item.label)}))))}},SlotOverridesExample={args:{label:"Slot Overrides Example",placeholder:"trigger is red, content is rounded",items:fruitItems,overrides:{trigger:{backgroundColor:"red",color:"white"},content:{borderRadius:16,border:"2px solid #ff0000"},label:{color:"red"}}}},StylePropExample={args:{label:"Style Prop Example",placeholder:"trigger is blue, content is rounded",items:fruitItems,style:{".trigger":{background:"blue",color:"white"},".content":{borderRadius:16,border:"2px solid #0000ff"},".label":{color:"blue"}}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Fruit Selection',\n    placeholder: 'Please select a fruit',\n    items: fruitItems,\n    variant: 'outlined',\n    size: 'md'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Basic usage of Select component.'\n      },\n      source: {\n        code: `<Select label=\"Fruit Selection\" items={fruitItems} />`\n      }\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),States.parameters=_objectSpread(_objectSpread({},States.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_States$parameters=States.parameters)||void 0===_States$parameters?void 0:_States$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <div style={{\n    display: \'flex\',\n    flexDirection: \'column\',\n    gap: \'16px\'\n  }}>\n      <Select label="Default State" placeholder="Default State" items={fruitItems} />\n      <Select label="Error State" placeholder="Error State" error={true} items={fruitItems} />\n      <Select label="Disabled State" placeholder="Disabled State" disabled items={fruitItems} />\n    </div>\n}'},null===(_States$parameters2=States.parameters)||void 0===_States$parameters2||null===(_States$parameters2=_States$parameters2.docs)||void 0===_States$parameters2?void 0:_States$parameters2.source)})}),WithError.parameters=_objectSpread(_objectSpread({},WithError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithError$parameters=WithError.parameters)||void 0===_WithError$parameters?void 0:_WithError$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Error Select',\n    placeholder: 'Please select a fruit',\n    items: fruitItems,\n    error: true,\n    helperText: 'Please select a fruit'\n  }\n}"},null===(_WithError$parameters2=WithError.parameters)||void 0===_WithError$parameters2||null===(_WithError$parameters2=_WithError$parameters2.docs)||void 0===_WithError$parameters2?void 0:_WithError$parameters2.source)})}),WithHelpText.parameters=_objectSpread(_objectSpread({},WithHelpText.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithHelpText$paramet=WithHelpText.parameters)||void 0===_WithHelpText$paramet?void 0:_WithHelpText$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Help Text Select',\n    placeholder: 'Please select a fruit',\n    items: fruitItems,\n    helperText: 'Please select a fruit.'\n  }\n}"},null===(_WithHelpText$paramet2=WithHelpText.parameters)||void 0===_WithHelpText$paramet2||null===(_WithHelpText$paramet2=_WithHelpText$paramet2.docs)||void 0===_WithHelpText$paramet2?void 0:_WithHelpText$paramet2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Disabled Select',\n    placeholder: 'Cannot be selected',\n    items: fruitItems,\n    disabled: true\n  }\n}"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})}),FullWidth.parameters=_objectSpread(_objectSpread({},FullWidth.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FullWidth$parameters=FullWidth.parameters)||void 0===_FullWidth$parameters?void 0:_FullWidth$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Full Width Select',\n    placeholder: 'This select will take up the full width of its parent element',\n    items: fruitItems,\n    fullWidth: true\n  }\n}"},null===(_FullWidth$parameters2=FullWidth.parameters)||void 0===_FullWidth$parameters2||null===(_FullWidth$parameters2=_FullWidth$parameters2.docs)||void 0===_FullWidth$parameters2?void 0:_FullWidth$parameters2.source)})}),WithDisabledItems.parameters=_objectSpread(_objectSpread({},WithDisabledItems.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithDisabledItems$pa=WithDisabledItems.parameters)||void 0===_WithDisabledItems$pa?void 0:_WithDisabledItems$pa.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Disabled Options Select',\n    placeholder: 'Cannot be selected',\n    items: [{\n      value: 'apple',\n      label: 'Apple'\n    }, {\n      value: 'banana',\n      label: 'Banana',\n      disabled: true\n    }, {\n      value: 'orange',\n      label: 'Orange'\n    }, {\n      value: 'grape',\n      label: 'Grape',\n      disabled: true\n    }, {\n      value: 'strawberry',\n      label: 'Strawberry'\n    }]\n  }\n}"},null===(_WithDisabledItems$pa2=WithDisabledItems.parameters)||void 0===_WithDisabledItems$pa2||null===(_WithDisabledItems$pa2=_WithDisabledItems$pa2.docs)||void 0===_WithDisabledItems$pa2?void 0:_WithDisabledItems$pa2.source)})}),Required.parameters=_objectSpread(_objectSpread({},Required.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Required$parameters=Required.parameters)||void 0===_Required$parameters?void 0:_Required$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Required Select',\n    placeholder: 'Must be selected',\n    items: fruitItems,\n    required: true\n  }\n}"},null===(_Required$parameters2=Required.parameters)||void 0===_Required$parameters2||null===(_Required$parameters2=_Required$parameters2.docs)||void 0===_Required$parameters2?void 0:_Required$parameters2.source)})}),SizeAndVariantCombinations.parameters=_objectSpread(_objectSpread({},SizeAndVariantCombinations.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SizeAndVariantCombin=SizeAndVariantCombinations.parameters)||void 0===_SizeAndVariantCombin?void 0:_SizeAndVariantCombin.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <div style={{\n    display: \'flex\',\n    flexDirection: \'column\',\n    gap: \'24px\'\n  }}>\n      <div>\n        <h3 style={{\n        marginBottom: \'12px\'\n      }}>Outlined Variant</h3>\n        <div style={{\n        display: \'flex\',\n        flexDirection: \'column\',\n        gap: \'12px\'\n      }}>\n          <Select label="Small Outlined" placeholder="Small Outlined" size="sm" variant="outlined" items={fruitItems} />\n          <Select label="Medium Outlined" placeholder="Medium Outlined" size="md" variant="outlined" items={fruitItems} />\n          <Select label="Large Outlined" placeholder="Large Outlined" size="lg" variant="outlined" items={fruitItems} />\n        </div>\n      </div>\n\n      <div>\n        <h3 style={{\n        marginBottom: \'12px\'\n      }}>Filled Variant</h3>\n        <div style={{\n        display: \'flex\',\n        flexDirection: \'column\',\n        gap: \'12px\'\n      }}>\n          <Select label="Small Filled" placeholder="Small Filled" size="sm" variant="filled" items={fruitItems} />\n          <Select label="Medium Filled" placeholder="Medium Filled" size="md" variant="filled" items={fruitItems} />\n          <Select label="Large Filled" placeholder="Large Filled" size="lg" variant="filled" items={fruitItems} />\n        </div>\n      </div>\n\n      <div>\n        <h3 style={{\n        marginBottom: \'12px\'\n      }}>Underlined Variant</h3>\n        <div style={{\n        display: \'flex\',\n        flexDirection: \'column\',\n        gap: \'12px\'\n      }}>\n          <Select label="Small Underlined" placeholder="Small Underlined" size="sm" variant="underlined" items={fruitItems} />\n          <Select label="Medium Underlined" placeholder="Medium Underlined" size="md" variant="underlined" items={fruitItems} />\n          <Select label="Large Underlined" placeholder="Large Underlined" size="lg" variant="underlined" items={fruitItems} />\n        </div>\n      </div>\n    </div>\n}'},null===(_SizeAndVariantCombin2=SizeAndVariantCombinations.parameters)||void 0===_SizeAndVariantCombin2||null===(_SizeAndVariantCombin2=_SizeAndVariantCombin2.docs)||void 0===_SizeAndVariantCombin2?void 0:_SizeAndVariantCombin2.source)})}),WithDefaultValue.parameters=_objectSpread(_objectSpread({},WithDefaultValue.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithDefaultValue$par=WithDefaultValue.parameters)||void 0===_WithDefaultValue$par?void 0:_WithDefaultValue$par.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => {\n    return <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '16px'\n    }}>\n        <Select label=\"Select with Default Value\" items={fruitItems} defaultValue=\"banana\" />\n      </div>;\n  }\n}"},null===(_WithDefaultValue$par2=WithDefaultValue.parameters)||void 0===_WithDefaultValue$par2||null===(_WithDefaultValue$par2=_WithDefaultValue$par2.docs)||void 0===_WithDefaultValue$par2?void 0:_WithDefaultValue$par2.source)})}),Controlled.parameters=_objectSpread(_objectSpread({},Controlled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Controlled$parameter=Controlled.parameters)||void 0===_Controlled$parameter?void 0:_Controlled$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => {\n    const [value, setValue] = useState('apple');\n    const handleValueChange = (newValue: string) => {\n      setValue(newValue);\n      console.log('Selected value:', newValue);\n    };\n    return <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '16px'\n    }}>\n        <div>\n          <p>Selected value: {value}</p>\n          <Select label=\"Controlled Select\" items={fruitItems} value={value} onValueChange={handleValueChange} />\n        </div>\n        <div style={{\n        display: 'flex',\n        gap: '8px'\n      }}>\n          {fruitItems.map(item => <button key={item.value} onClick={() => handleValueChange(item.value)} style={{\n          padding: '4px 8px',\n          border: '1px solid #ccc',\n          borderRadius: '4px',\n          background: value === item.value ? '#e0e0ff' : 'white'\n        }}>\n              Change to {item.label}\n            </button>)}\n        </div>\n      </div>;\n  }\n}"},null===(_Controlled$parameter2=Controlled.parameters)||void 0===_Controlled$parameter2||null===(_Controlled$parameter2=_Controlled$parameter2.docs)||void 0===_Controlled$parameter2?void 0:_Controlled$parameter2.source)})}),SlotOverridesExample.parameters=_objectSpread(_objectSpread({},SlotOverridesExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SlotOverridesExample=SlotOverridesExample.parameters)||void 0===_SlotOverridesExample?void 0:_SlotOverridesExample.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Slot Overrides Example',\n    placeholder: 'trigger is red, content is rounded',\n    items: fruitItems,\n    overrides: {\n      trigger: {\n        backgroundColor: 'red',\n        color: 'white'\n      },\n      content: {\n        borderRadius: 16,\n        border: '2px solid #ff0000'\n      },\n      label: {\n        color: 'red'\n      }\n    }\n  }\n}"},null===(_SlotOverridesExample2=SlotOverridesExample.parameters)||void 0===_SlotOverridesExample2||null===(_SlotOverridesExample2=_SlotOverridesExample2.docs)||void 0===_SlotOverridesExample2?void 0:_SlotOverridesExample2.source)})}),StylePropExample.parameters=_objectSpread(_objectSpread({},StylePropExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StylePropExample$par=StylePropExample.parameters)||void 0===_StylePropExample$par?void 0:_StylePropExample$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Style Prop Example',\n    placeholder: 'trigger is blue, content is rounded',\n    items: fruitItems,\n    style: {\n      '.trigger': {\n        background: 'blue',\n        color: 'white'\n      },\n      '.content': {\n        borderRadius: 16,\n        border: '2px solid #0000ff'\n      },\n      '.label': {\n        color: 'blue'\n      }\n    }\n  }\n}"},null===(_StylePropExample$par2=StylePropExample.parameters)||void 0===_StylePropExample$par2||null===(_StylePropExample$par2=_StylePropExample$par2.docs)||void 0===_StylePropExample$par2?void 0:_StylePropExample$par2.source)})});const __namedExportsOrder=["Default","States","WithError","WithHelpText","Disabled","FullWidth","WithDisabledItems","Required","SizeAndVariantCombinations","WithDefaultValue","Controlled","SlotOverridesExample","StylePropExample"]}}]);