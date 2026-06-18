import React, { useEffect } from 'react';

export function Head({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const addedElements: HTMLElement[] = [];

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;

      const type = child.type as string;
      const props = child.props as any;

      if (type === 'title') {
        if (props.children && typeof props.children === 'string') {
          document.title = props.children;
        }
        return;
      }

      if (type === 'meta' || type === 'link' || type === 'script') {
        const el = document.createElement(type);
        Object.entries(props).forEach(([key, value]) => {
          if (key === 'children') {
            if (typeof value === 'string') {
              el.textContent = value;
            }
          } else if (key !== 'key') {
            el.setAttribute(key, String(value));
          }
        });

        // Clean up pre-existing equivalent meta or link tags to prevent duplicates
        let existing: HTMLElement | null = null;
        if (type === 'meta') {
          if (props.name) {
            existing = document.head.querySelector(`meta[name="${props.name}"]`);
          } else if (props.property) {
            existing = document.head.querySelector(`meta[property="${props.property}"]`);
          }
        }

        if (existing && existing.parentNode) {
          existing.parentNode.removeChild(existing);
        }

        document.head.appendChild(el);
        addedElements.push(el);
      }
    });

    return () => {
      addedElements.forEach((el) => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, [children]);

  return null;
}
