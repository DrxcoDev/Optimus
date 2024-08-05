#include <windows.h>
#include <winhttp.h>
#include <iostream>
#include <fstream>
#include <string>

void DownloadFile(const std::wstring& url, const std::string& filename) {
    // Initialize WinHTTP
    HINTERNET hSession = WinHttpOpen(L"A WinHTTP Example Program/1.0", 
                                     WINHTTP_ACCESS_TYPE_DEFAULT_PROXY,
                                     WINHTTP_NO_PROXY_NAME, 
                                     WINHTTP_NO_PROXY_BYPASS, 
                                     0);
    if (!hSession) {
        std::cerr << "Error: Unable to initialize WinHTTP session. Error code: " << GetLastError() << std::endl;
        return;
    }

    // Specify the server and port
    URL_COMPONENTS urlComponents = {0};
    urlComponents.dwStructSize = sizeof(urlComponents);
    urlComponents.dwHostNameLength = 1; // Set to 1 to parse the hostname
    urlComponents.dwUrlPathLength = 1;  // Set to 1 to parse the path

    if (!WinHttpCrackUrl(url.c_str(), 0, 0, &urlComponents)) {
        std::cerr << "Error: Unable to parse URL. Error code: " << GetLastError() << std::endl;
        WinHttpCloseHandle(hSession);
        return;
    }

    // Use port 443 for HTTPS
    int port = (urlComponents.nPort == INTERNET_DEFAULT_HTTP_PORT) ? 80 : 443;

    // Connect to the server
    HINTERNET hConnect = WinHttpConnect(hSession, urlComponents.lpszHostName,
                                        port, 0);
    if (!hConnect) {
        std::cerr << "Error: Unable to connect to server. Error code: " << GetLastError() << std::endl;
        WinHttpCloseHandle(hSession);
        return;
    }

    // Create a request
    HINTERNET hRequest = WinHttpOpenRequest(hConnect, L"GET",
                                            urlComponents.lpszUrlPath,
                                            NULL, WINHTTP_NO_REFERER,
                                            WINHTTP_DEFAULT_ACCEPT_TYPES,
                                            WINHTTP_FLAG_SECURE);
    if (!hRequest) {
        std::cerr << "Error: Unable to create request. Error code: " << GetLastError() << std::endl;
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        return;
    }

    // Send the request
    if (!WinHttpSendRequest(hRequest,
                            WINHTTP_NO_ADDITIONAL_HEADERS, 0,
                            WINHTTP_NO_REQUEST_DATA, 0,
                            0, 0)) {
        std::cerr << "Error: Unable to send request. Error code: " << GetLastError() << std::endl;
        WinHttpCloseHandle(hRequest);
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        return;
    }

    // Receive the response
    if (!WinHttpReceiveResponse(hRequest, NULL)) {
        std::cerr << "Error: Unable to receive response. Error code: " << GetLastError() << std::endl;
        WinHttpCloseHandle(hRequest);
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        return;
    }

    // Write response to file
    std::ofstream ofs(filename, std::ios::binary);
    if (!ofs.is_open()) {
        std::cerr << "Error: Unable to open file for writing." << std::endl;
        WinHttpCloseHandle(hRequest);
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        return;
    }

    DWORD dwSize = 0;
    DWORD dwDownloaded = 0;
    LPSTR pszOutBuffer;
    BOOL  bResults = FALSE;

    do {
        dwSize = 0;
        if (!WinHttpQueryDataAvailable(hRequest, &dwSize)) {
            std::cerr << "Error: Unable to query data availability. Error code: " << GetLastError() << std::endl;
            break;
        }

        pszOutBuffer = new char[dwSize + 1];
        if (!pszOutBuffer) {
            std::cerr << "Error: Out of memory." << std::endl;
            break;
        }

        ZeroMemory(pszOutBuffer, dwSize + 1);
        if (!WinHttpReadData(hRequest, (LPVOID)pszOutBuffer, dwSize, &dwDownloaded)) {
            std::cerr << "Error: Unable to read data. Error code: " << GetLastError() << std::endl;
        } else {
            ofs.write(pszOutBuffer, dwDownloaded);
        }

        delete[] pszOutBuffer;
    } while (dwSize > 0);

    ofs.close();

    // Cleanup
    WinHttpCloseHandle(hRequest);
    WinHttpCloseHandle(hConnect);
    WinHttpCloseHandle(hSession);
}


int main() {
    std::wstring url = L"https://raw.githubusercontent.com/DrxcoDev/Optimus/main/packages/Animations/anim.scss";
    std::string filename = "anim.scss";
    DownloadFile(url, filename);
    std::cout << "Download complete. Press any key to exit..." << std::endl;
    system("pause"); // Pauses the program until a key is pressed
    return 0;
}
