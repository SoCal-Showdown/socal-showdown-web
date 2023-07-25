<template>
  <div>
    <NavigationBar tab-prop="all-forms" />
    <br />
    <nav>
      <ul>
        <li>
          <LazyNuxtLink to="/forms/team_application">
            Team Application Form
          </LazyNuxtLink>
        </li>
        <li>
          <NuxtLink to="/forms/volunteer_application">
            Volunteer Application Form
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/forms/workshop_ideating">
            Workshop Interest Form
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
}

li {
  display: inline;
  background-color: orange;
  width: 25%;
  padding: 6px;
  margin: 5px 5%;
  color: black;
  border-radius: 3px;
}

a {
  color: black;
  text-decoration: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
