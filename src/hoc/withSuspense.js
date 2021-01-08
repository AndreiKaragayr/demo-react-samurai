import React from "react";

export const withSuspense = (Component) => {
  return (props) => <React.Suspense fallback={<div>Загрузка...</div>}>
      <Component {...props} />
    </React.Suspense>
}