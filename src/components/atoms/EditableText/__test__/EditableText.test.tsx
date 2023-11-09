import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { SinglePostType } from 'src/services/types';

import { EditableText } from '../EditableText';

describe('EditableText', () => {
  it('should edit a field', () => {
    const sampleText = 'Updating cell';

    let editedValue;
    const handleEdit = (_id: number, payload: Partial<SinglePostType>) => {
      editedValue = payload.title;
    };

    render(
      <EditableText
        onEdit={handleEdit}
        value="Dummy"
        valueID={1}
        valueKey={'title'}
      />
    );

    const cell = screen.getByRole('textbox');
    fireEvent.focusIn(cell);
    fireEvent.change(cell, { target: { value: sampleText } });
    fireEvent.focusOut(cell);

    expect(editedValue).toEqual(sampleText);
  });
});
