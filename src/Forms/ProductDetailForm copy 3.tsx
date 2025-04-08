"use client";

import { useState, useEffect } from "react";
import { Delete } from "@mui/icons-material"; // Optional: Replace with icons or remove

interface Field {
  label: string;
  value: string;
}

interface Section {
  title: string;
  fields: Field[];
}

interface Specification {
  sections: Section[];
}

const ProductDetailForm = ({ onSave }: { onSave: (data: any) => void }) => {
  const [specifications, setSpecifications] = useState<Specification>({ sections: [] });

  const addSection = () => {
    setSpecifications((prev) => ({
      sections: [...prev.sections, { title: "", fields: [{ label: "", value: "" }] }],
    }));
  };

  const removeSection = (index: number) => {
    setSpecifications((prev) => ({
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const addField = (sectionIndex: number) => {
    setSpecifications((prev) => {
      const updatedSections = [...prev.sections];
      updatedSections[sectionIndex].fields.push({ label: "", value: "" });
      return { sections: updatedSections };
    });
  };

  const removeField = (sectionIndex: number, fieldIndex: number) => {
    setSpecifications((prev) => {
      const updatedSections = [...prev.sections];
      updatedSections[sectionIndex].fields = updatedSections[sectionIndex].fields.filter(
        (_, i) => i !== fieldIndex
      );
      return { sections: updatedSections };
    });
  };

  const handleInputChange = (
    sectionIndex: number,
    fieldIndex: number | null,
    key: "title" | "label" | "value",
    value: string
  ) => {
    setSpecifications((prev) => {
      const updatedSections: any = [...prev.sections];

      if (fieldIndex === null) {
        updatedSections[sectionIndex].title = value;
      } else {
        updatedSections[sectionIndex].fields[fieldIndex][key] = value;
      }

      return { sections: updatedSections };
    });
  };

  useEffect(() => {
    onSave(specifications);
    console.log("Updated specifications:", specifications);
  }, [specifications, onSave]);

  return (
    <div className="mx-auto bg-white ">
      <h2 className=" mb-4">Product Specifications</h2>

      {specifications.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border p-4 rounded mb-4 bg-gray-50">
          <div className="mb-3">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Section Title"
              value={section.title}
              onChange={(e) => handleInputChange(sectionIndex, null, "title", e.target.value)}
            />
          </div>

          {section.fields.map((field, fieldIndex) => (
            <div key={fieldIndex} className="flex gap-2 mb-2">
              <input
                type="text"
                className="w-1/2 p-2 border rounded"
                placeholder="Label"
                value={field.label}
                onChange={(e) =>
                  handleInputChange(sectionIndex, fieldIndex, "label", e.target.value)
                }
              />
              <input
                type="text"
                className="w-1/2 p-2 border rounded"
                placeholder="Value"
                value={field.value}
                onChange={(e) =>
                  handleInputChange(sectionIndex, fieldIndex, "value", e.target.value)
                }
              />
              <button
                className="bg-red-500 text-white px-3 rounded"
                onClick={() => removeField(sectionIndex, fieldIndex)}
              >
                <Delete fontSize="small" /> {/* Optional icon */}
              </button>
            </div>
          ))}

          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => addField(sectionIndex)}
          >
            + Add Field
          </button>

          <button
            className="mt-2 ml-3 px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => removeSection(sectionIndex)}
          >
            Remove Section
          </button>
        </div>
      ))}

      <div className="mt-4 mb-4">
        <button
          className="px-5 py-2 bg-green-600 text-white rounded"
          onClick={addSection}
        >
          + Add Section
        </button>
      </div>
    </div>
  );
};

export default ProductDetailForm;
