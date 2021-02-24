export type EditProfileForm = {
  firstName: '';
  lastName: '';
  email: '';
  phone: '';
};

type ImagePickerResultCrop = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export type ImagePickerResult = {
  creationDate?: string;
  cropRect?: ImagePickerResultCrop | null;
  filename?: string;
  height?: number;
  mime?: string;
  path?: string;
  size?: number;
  sourceURL?: string;
  width: number;
};
