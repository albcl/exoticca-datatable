import { useState } from 'react';

import { OutlinedInput } from '@mui/material';

import * as S from './style';
import type { EditableTextProps } from './types';

export function EditableText({
  onEdit,
  value,
  valueID,
  valueKey
}: EditableTextProps) {
  const [text, setText] = useState<string>(value);

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const { value: v } = e.target;
    const payload = { [valueKey]: v };
    onEdit(valueID, payload);
  };

  return (
    <S.FormCell>
      <OutlinedInput
        fullWidth
        name="edit-value"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
        onBlur={handleBlur}
      />
    </S.FormCell>
  );
}
