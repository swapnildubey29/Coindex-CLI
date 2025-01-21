# Coindex CLI

A command-line interface (CLI) built with Node.js to check cryptocurrency prices.

**Register an API key** at [Nomics](https://nomics.com) to start using the app.

## 📦 Installation

1. Clone the repository or download the project files.
2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Link the package globally to access the `coindex` command:

    ```bash
    npm link
    ```

## 🧑‍💻 Usage

Once you've installed and linked the CLI, you can start using the available commands.

### 🚀 Basic Commands

- **Help & Command List**

    Get a list of available commands and options:

    ```bash
    coindex -h
    ```

- **Show Version**

    Check the current version of the CLI:

    ```bash
    coindex -V
    ```

### 🔑 API Key Commands

To interact with the Nomics API, you need to set, view, or remove your API key.

- **Set API Key**  
    Set your Nomics API key (get it from [Nomics](https://nomics.com)):

    ```bash
    coindex key set
    ```

- **Show API Key**  
    Display your currently set API key:

    ```bash
    coindex key show
    ```

- **Remove API Key**  
    Remove the stored API key:

    ```bash
    coindex key remove
    ```

### 📊 Crypto Price Check

Check the prices of your desired cryptocurrencies.

- **Check Crypto Price**  
    Check the prices of default cryptocurrencies (BTC, ETH, XRP):

    ```bash
    coindex check price
    ```

- **Check Specific Coins**  
    Specify which coins to check (e.g., BTC, ETH):

    ```bash
    coindex check --coin=BTC,ETH
    ```

- **Choose Currency**  
    Change the currency for price display (default: USD):

    ```bash
    coindex check --cur=EUR
    ```

    Available currencies: USD, EUR, GBP, and more!

## 🔧 Contributing

Feel free to fork the repository and submit issues or pull requests for improvements!

## 📜 License

This project is licensed under the [MIT License](LICENSE).
