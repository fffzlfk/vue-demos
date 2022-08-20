import{d as defineComponent,r as ref,o as openBlock,c as createElementBlock,a as createBaseVNode,t as toDisplayString}from"./index.66fe6fac.js";var calculator_vue_vue_type_style_index_0_lang="";const _hoisted_1={class:"calculator"},_hoisted_2={class:"result",style:{"grid-area":"result"}},_sfc_main=defineComponent({__name:"calculator",setup(__props){let equation=ref("0"),isDecimalAdded=!1,isOperatorAdded=!1,isStarted=!1;function isOperator(a){return["+","-","\xD7","\xF7"].indexOf(a)>-1}function append(a){if(!(equation.value.length>9)){if(equation.value==="0"&&!isOperator(a)){a==="."?(equation.value+=a,isDecimalAdded=!0):equation.value=a,isStarted=!0;return}if(!isOperator(a)){if(a==="."&&isDecimalAdded)return;a==="."?(isDecimalAdded=!0,isOperatorAdded=!0):isOperatorAdded=!1,equation.value+=a}isOperator(a)&&!isOperatorAdded&&(equation.value+=a,isDecimalAdded=!1,isOperatorAdded=!0)}}function calculate(){const result=equation.value.replace(new RegExp("\xD7","g"),"*").replace(new RegExp("\xF7","g"),"/");equation.value=parseFloat(eval(result).toFixed(9)).toString(),isOperatorAdded=!1,isDecimalAdded=!1}function calculateToggle(){isOperatorAdded||!isStarted||(equation.value+="* -1",calculate())}function calculatePercentage(){isOperatorAdded||!isStarted||(equation.value+="* 0.01",calculate())}function clear(){equation.value="0",isDecimalAdded=!1,isOperatorAdded=!1,isStarted=!1}return(a,e)=>(openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,toDisplayString(equation.value),1),createBaseVNode("button",{style:{"grid-area":"ac"},onClick:e[0]||(e[0]=t=>clear())},"AC"),createBaseVNode("button",{style:{"grid-area":"plus-minus"},onClick:e[1]||(e[1]=t=>calculateToggle())},"\xB1"),createBaseVNode("button",{style:{"grid-area":"percent"},onClick:e[2]||(e[2]=t=>calculatePercentage())},"%"),createBaseVNode("button",{style:{"grid-area":"add"},onClick:e[3]||(e[3]=t=>append("+"))},"+"),createBaseVNode("button",{style:{"grid-area":"subtract"},onClick:e[4]||(e[4]=t=>append("-"))}," - "),createBaseVNode("button",{style:{"grid-area":"multiply"},onClick:e[5]||(e[5]=t=>append("\xD7"))},"\xD7"),createBaseVNode("button",{style:{"grid-area":"divide"},onClick:e[6]||(e[6]=t=>append("\xF7"))},"\xF7"),createBaseVNode("button",{style:{"grid-area":"equal"},onClick:calculate},"="),createBaseVNode("button",{style:{"grid-area":"number-1"},onClick:e[7]||(e[7]=t=>append("1"))},"1"),createBaseVNode("button",{style:{"grid-area":"number-2"},onClick:e[8]||(e[8]=t=>append("2"))},"2"),createBaseVNode("button",{style:{"grid-area":"number-3"},onClick:e[9]||(e[9]=t=>append("3"))},"3"),createBaseVNode("button",{style:{"grid-area":"number-4"},onClick:e[10]||(e[10]=t=>append("4"))},"4"),createBaseVNode("button",{style:{"grid-area":"number-5"},onClick:e[11]||(e[11]=t=>append("5"))},"5"),createBaseVNode("button",{style:{"grid-area":"number-6"},onClick:e[12]||(e[12]=t=>append("6"))},"6"),createBaseVNode("button",{style:{"grid-area":"number-7"},onClick:e[13]||(e[13]=t=>append("7"))},"7"),createBaseVNode("button",{style:{"grid-area":"number-8"},onClick:e[14]||(e[14]=t=>append("8"))},"8"),createBaseVNode("button",{style:{"grid-area":"number-9"},onClick:e[15]||(e[15]=t=>append("9"))},"9"),createBaseVNode("button",{style:{"grid-area":"number-0"},onClick:e[16]||(e[16]=t=>append("0"))},"0"),createBaseVNode("button",{style:{"grid-area":"dot"},onClick:e[17]||(e[17]=t=>append("."))},".")]))}});export{_sfc_main as default};
