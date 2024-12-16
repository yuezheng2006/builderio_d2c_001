Follow these fundamental principles when generating code:

Architecture (Viper):
• View: Handles UI rendering and user interactions only
• Interactor: Contains business logic and coordinates data flow
• Presenter: Manages presentation logic and data formatting
• Entity: Core business models and rules
• Router: Handles navigation and dependency injection

Code Quality:
• Write clean, maintainable, and concise code
• Follow DRY (Don't Repeat Yourself) principles
• Ensure proper error handling

Documentation:
• Add meaningful comments for complex logic
• Document any assumptions or limitations

Naming Conventions:
• Use descriptive and consistent naming
• Follow language-specific conventions
• Avoid abbreviations unless widely recognized

File Structure:
/src
/views # View components
/interactors # Business logic layer
/presenters # Presentation logic layer
/entities # Business models layer
/routers # Routing layer
/shared # Shared utilities and constants
