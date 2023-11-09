export type EditableTextProps = TypographyProps & {
  onEdit: (id: number, payload: Partial<SinglePostType>) => void;
  value: string;
  valueID: number;
  valueKey: string;
};
