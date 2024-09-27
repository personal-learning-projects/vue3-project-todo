import pluginVue from "eslint-plugin-vue"

export default [
    ...pluginVue.configs["flat/recommended"],
    ...pluginVue.configs["flat/strongly-recommended"],
    {
        rules: {
            "vue/html-indent": "off"
        },
    },
]
