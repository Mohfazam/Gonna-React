📑 3. Tab Switcher
🧠 What to Do:
Build a component with 3 tabs:

Home

Profile

Settings

Clicking each tab should render different content.

🎯 Learning Goals:
Use a string or number in useState to track active tab

Use conditional rendering for content based on tab

Style active tabs dynamically (optional)

🧱 Components Involved:
A row of buttons or nav links

Conditional content block

📦 State Example:

const [activeTab, setActiveTab] = useState("home");
🧩 UI/UX Flow:
By default, Home content shows.

Clicking Profile → shows Profile content.

Buttons should visually indicate active state (bold/underline/etc.).

✅ Outcome:

[Home] [Profile] [Settings]

--- Content Area ---
You’re on the Home tab!