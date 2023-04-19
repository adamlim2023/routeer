import React, { useState } from "react";
import Button from "components/common/Button";
import Card from "components/common/Card";
import Select from "components/common/Select";
import TextField from "components/common/TextField";

const SearchForm = () => {
  const [searchKey, setSearchKey] = useState("");
  const options = [
    {
      value: "all",
      label: "All categories",
    },
    {
      value: "category_1",
      label: "Category 1",
    },
    {
      value: "category_2",
      label: "Category 2",
    },
    {
      value: "category_3",
      label: "Category 3",
    },
  ];

  const [categories, setCategories] = useState(null);
  const handleCategories = (selectedOption) => {
    setCategories(selectedOption);
  };

  return (
    <Card className="w-full p-4 tablet:p-5 desktop:px-[110px] flex flex-col tablet:flex-row items-center">
      <div className="w-full mb-4 tablet:mb-0">
        <TextField
          value={searchKey}
          className="w-full"
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
      <div className="w-full tablet:w-auto flex justify-between items-center flex-shrink-0">
        <div className="mx-0 tablet:ml-4 tablet:mr-[60px] desktop:ml-8 desktop:mr-20">
          <Select
            id="categories"
            instanceId="categories"
            options={options}
            value={categories}
            onChange={handleCategories}
            placeholder="Categories"
          />
        </div>
        <Button variant="danger">Search</Button>
      </div>
    </Card>
  );
};

export default SearchForm;
