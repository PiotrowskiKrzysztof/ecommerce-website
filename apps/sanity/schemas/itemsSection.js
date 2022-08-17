export default {
  name: "itemsSection",
  title: "Items Section",
  type: "object",
  fieldsets: [
    {
      name: "leftProduct",
      title: "Left Product",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: "centerProduct",
      title: "Center Product",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: "rightProduct",
      title: "Right Product",
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Title is required!")
    },
    {
      name: "leftProduct",
      title: "Left Product",
      type: "reference",
      to: [{ type: "product" }],
      fieldset: "leftProduct",
      validation: (Rule) =>
        Rule.required().error("Left product is required!")
    },
    {
      name: "centerProduct",
      title: "Center Product",
      type: "reference",
      to: [{ type: "product" }],
      fieldset: "centerProduct",
      validation: (Rule) =>
        Rule.required().error("Center product is required!")
    },
    {
      name: "rightProduct",
      title: "Right Product",
      type: "reference",
      to: [{ type: "product" }],
      fieldset: "rightProduct",
      validation: (Rule) =>
        Rule.required().error("Right product is required!")
    }
  ]
};
