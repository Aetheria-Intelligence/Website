import { useId, useMemo, useRef, useState } from 'react';

function moveIndex(currentIndex, offset, length) {
  return (currentIndex + offset + length) % length;
}

export function Tabs({ label, tabs, defaultTabId = '' }) {
  const generatedId = useId();
  const fallbackId = tabs[0]?.id;
  const [activeId, setActiveId] = useState(defaultTabId || fallbackId);
  const buttonRefs = useRef({});

  const activeIndex = useMemo(() => tabs.findIndex((tab) => tab.id === activeId), [activeId, tabs]);

  function focusTab(index) {
    const nextTab = tabs[index];

    if (!nextTab) {
      return;
    }

    setActiveId(nextTab.id);
    buttonRefs.current[nextTab.id]?.focus();
  }

  function handleKeyDown(event) {
    if (!tabs.length) {
      return;
    }

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        focusTab(moveIndex(activeIndex, 1, tabs.length));
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        focusTab(moveIndex(activeIndex, -1, tabs.length));
        break;
      case 'Home':
        event.preventDefault();
        focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="tabs-shell">
      <div className="tablist" role="tablist" aria-label={label} onKeyDown={handleKeyDown}>
        {tabs.map((tab) => {
          const selected = tab.id === activeId;
          const tabId = `${generatedId}-${tab.id}-tab`;
          const panelId = `${generatedId}-${tab.id}-panel`;

          return (
            <button
              key={tab.id}
              ref={(node) => {
                buttonRefs.current[tab.id] = node;
              }}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              className={`tab-button${selected ? ' is-active' : ''}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => {
        const selected = tab.id === activeId;
        const tabId = `${generatedId}-${tab.id}-tab`;
        const panelId = `${generatedId}-${tab.id}-panel`;

        return (
          <section
            key={tab.id}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!selected}
            className="tabpanel"
          >
            {selected ? tab.panel : null}
          </section>
        );
      })}
    </div>
  );
}
