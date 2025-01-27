import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

describe('Avatar', () => {
  it('sholud render Avatar component', () => {
    const avatar = render(<Avatar />);

    expect(avatar).toMatchSnapshot();
  });

  it('sholud render AvatarImage component', () => {
    const avatarImage = render(
      <Avatar>
        <AvatarImage />
      </Avatar>,
    );

    expect(avatarImage).toMatchSnapshot();
  });

  it('sholud render AvatarFallback component', () => {
    const avatarImage = render(
      <Avatar>
        <AvatarFallback />
      </Avatar>,
    );

    expect(avatarImage).toMatchSnapshot();
  });
});
