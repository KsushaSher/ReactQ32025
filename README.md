# React + TypeScript + Vite

## Performance Profiling

- **Tested interactions:**
  - Sorting a column by population
  - Sorting a column by name (desc)
  - Searching for a country
  - Selecting a year
  - Adding/removing columns

## Before optimization

### Sorting a column by population:

- **Commit Duration: 2.3s**
- **Render Duration: 1038.6ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for sorting by population**

![Profiler Flame Graph](docs/images/flame-sortPopulation-before.png)

- **Ranked Chart for sorting by population**

![Profiler Ranked Chart](docs/images/ranked-sortPopulation-before.png)

### Sorting a column by name (desc):

- **Commit Duration: 2.9s**
- **Render Duration: 1107.4ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for sorting by name (desc)**

![Profiler Flame Graph](docs/images/flame-sortName-before.png)

- **Ranked Chart for sorting by name (desc)**

![Profiler Ranked Chart](docs/images/ranked-sortName-before.png)

### Searching for a country:

- **Commit Duration: 4.3s**
- **Render Duration: 1004.5ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for search**

![Profiler Flame Graph](docs/images/flame-search-before.png)

- **Ranked Chart for search**

![Profiler Ranked Chart](docs/images/ranked-search-before.png)

### Selecting a year:

- **Commit Duration: 4.9s**
- **Render Duration: 25.1ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for year**

![Profiler Flame Graph](docs/images/flame-selectYear-before.png)

- **Ranked Chart for year**

![Profiler Ranked Chart](docs/images/ranked-selectYear-before.png)

### Adding/removing columns:

- **Commit Duration: 0.8s**
- **Render Duration: 1182.4ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for columns**

![Profiler Flame Graph](docs/images/flame-add-before.png)

- **Ranked Chart for columns**

![Profiler Ranked Chart](docs/images/ranked-add-beforee.png)

## After optimization

### Sorting a column by population:

- **Commit Duration: 1.9s**
- **Render Duration: 166.2ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for sorting by population**

![Profiler Flame Graph](docs/images/flame-sortPopulation-after.png)

- **Ranked Chart for sorting by population**

![Profiler Ranked Chart](docs/images/ranked-sortPopulation-after.png)

### Sorting a column by name (desc):

- **Commit Duration: 1.7s**
- **Render Duration: 158.8ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for sorting by name (desc)**

![Profiler Flame Graph](docs/images/flame-sortName-after.png)

- **Ranked Chart for sorting by name (desc)**

![Profiler Ranked Chart](docs/images/ranked-sortName-after.png)

### Searching for a country:

- **Commit Duration: 1.7s**
- **Render Duration: 137.4ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for sorting**

![Profiler Flame Graph](docs/images/flame-search-after.png)

- **Ranked Chart for search**

![Profiler Ranked Chart](docs/images/ranked-search-after.png)

### Selecting a year:

- **Commit Duration: 3.9s**
- **Render Duration: 24.3ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for year**

![Profiler Flame Graph](docs/images/flame-selectYear-after.png)

- **Ranked Chart for year**

![Profiler Ranked Chart](docs/images/ranked-selectYear-after.png)

### Adding/removing columns:

- **Commit Duration: 0.8s**
- **Render Duration: 1414.8ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

- **Flame Graph for columns**

![Profiler Flame Graph](docs/images/flame-add-after.png)

- **Ranked Chart for columns**

![Profiler Ranked Chart](docs/images/ranked-add-after.png)
