import React from "react"
import styled from "styled-components"

const noop = () => {}

const Container = styled.label`
  /*
toggle styles copied and modified from
https://codepen.io/mallendeo/pen/eLIiG
by Mauricio Allende (https://mallendeo.com/)
 */
  position: absolute;
  top: 40px;
  right: 40px; /* margin-top: auto; */
  opacity: 0.5;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  .toggle-btn {
    box-sizing: initial;
    display: inline-block;
    outline: 0;
    width: 2rem;
    height: 1rem;
    position: relative;
    cursor: pointer;
    user-select: none;
    background: ${(p) => p.theme.toggle.offBody};
    border-radius: 4em;
    padding: 4px;
    transition: all 0.4s ease;
    border: 2px solid #e8eae9;
  }
  .toggle-input:focus + .toggle-btn::after,
  .toggle-btn:active::after {
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
  }
  .toggle-btn::after {
    left: 0;
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    border-radius: 4em;
    background: ${(p) => p.theme.toggle.onDot};
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }
  .toggle-btn.toggle-btn-on::after {
    left: 50%;
  }
  .toggle-btn.toggle-btn-on {
    background: ${(p) => p.theme.toggle.onBody};
  }
  .toggle-btn.toggle-btn-on:active {
    box-shadow: none;
  }
  .toggle-btn.toggle-btn-on:active::after {
    margin-left: -1.6em;
  }
  .toggle-btn:active::after {
    padding-right: 1.6em;
  }
  .toggle-input {
    /* visually hidden but still accessible */
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
`

export function Toggle({
  on,
  className = "",
  onClick,
  ...props
}: {
  on: boolean
  className: string
  onClick: () => void
}) {
  const btnClassName = [
    className,
    "toggle-btn",
    on ? "toggle-btn-on" : "toggle-btn-off",
  ]
    .filter(Boolean)
    .join(" ")
  return (
    <Container aria-label={"Toggle"} style={{ display: "block" }}>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={noop}
        onClick={onClick}
        data-testid="toggle-input"
      />
      <span className={btnClassName} {...props} />
    </Container>
  )
}
