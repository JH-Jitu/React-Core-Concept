import React, { Component } from "react";

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { changes: currentChanges, locale: currentLocale } = this.props;
    const { changes: nextChanges, locale: nextLocale } = nextProps;
    if (currentChanges === nextChanges && currentLocale === nextLocale) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { changes, locale } = this.props;
    return (
      <div>
        <button onClick={changes}>
          Change Format to {locale === "en-US" ? "bn-BD" : "en-US"}
        </button>
      </div>
    );
  }
}

export default Button;
