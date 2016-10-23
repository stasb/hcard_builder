import React from 'react';
import { mount } from 'enzyme';
import CardPreview from 'components/CardPreview/CardPreview';

describe('<CardPreview />', () => {
  describe('initially rendering the component', () => {
    const profile = {
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      houseName: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: '',
      fullName: '',
      imagePreviewUrl: ''
    };

    let component;

    component = mount(<CardPreview profile={profile} />);

    it('should have an empty email field', () => {
      expect(component.contains(<p class="d-hc-preview-info-content">test@gmail.com</p>)).to.equal(false);
    });

    it('should have an empty phone field', () => {
      expect(component.contains(<p class="d-hc-preview-info-content">123456</p>)).to.equal(false);
    });
  });

  describe('rendering with a semi-completed profile', () => {
    const profile = {
      givenName: '',
      surname: '',
      email: 'test@gmail.com',
      phone: '123456',
      houseName: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: '',
      fullName: '',
      imagePreviewUrl: ''
    };

    let component;

    component = mount(<CardPreview profile={profile} />);

    it('should have an completed email field', () => {
      expect(component.contains(<p className="d-hc-preview-info-content">test@gmail.com</p>)).to.equal(true);
    });

    it('should have an completed phone field', () => {
      expect(component.contains(<p className="d-hc-preview-info-content">123456</p>)).to.equal(true);
    });
  });
});
