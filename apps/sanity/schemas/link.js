export default {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      name: "url",
      type: "url",
      title: "URL",
      validation: (Rule) => Rule.required().error("URL is required!")
    },
    {
      name: "label",
      type: "string",
      title: "Label",
      validation: (Rule) =>
        Rule.required().error("Label is required!")
    }
  ]
};
