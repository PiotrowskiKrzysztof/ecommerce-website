export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [
          {
            name: "link",
            type: "blockContentLink"
          },
          {
            name: "decors",
            title: "Decors",
            type: "object",
            fields: [
              {
                type: "string",
                name: "colorText"
              },
              {
                name: "color",
                title: "Color",
                type: "colorPicker"
              }
            ]
          }
        ]
      }
    },
    {
      type: "image"
    }
  ]
};
