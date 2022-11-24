import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import {routes, MASTER_PATH} from "../consts"

export default function AppRouter() {
  return (
    <Routes>
      {routes.map(({path, Component}) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={MASTER_PATH} />} />
    </Routes>
  )
}
