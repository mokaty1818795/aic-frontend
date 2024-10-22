type QuotationTypes = {
  personalDetails: {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    phoneNumber: string;
    nationalId: string;
  };

  coverDetails: {
    coverOption: string;
    coverType: string;
    coverAmount: string;
    productOption: string;
  };

  insuredDetails: {
    age: string;
    premiumAmount: string;
    relationshipGroup: string;
    typeofRelationship: string;
  };
};

export default QuotationTypes;
