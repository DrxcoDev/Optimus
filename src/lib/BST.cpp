#include <queue>
#include <unordered_map>
#include <vector>
#include <algorithm>
#include <iostream>
#include <memory>
#include <limits>
#include <string>

// Definición de un nodo para el árbol binario de búsqueda
template <typename T>
struct BSTNode {
    T data;
    BSTNode* left;
    BSTNode* right;

    BSTNode(T value) : data(value), left(nullptr), right(nullptr) {}
};

// Implementación de un árbol binario de búsqueda (BST)
template <typename T>
class BST {
private:
    BSTNode<T>* root;

    void insert(BSTNode<T>*& node, T value) {
        if (node == nullptr) {
            node = new BSTNode<T>(value);
        } else if (value < node->data) {
            insert(node->left, value);
        } else if (value > node->data) {
            insert(node->right, value);
        }
    }

    bool search(BSTNode<T>* node, T value) const {
        if (node == nullptr) {
            return false;
        } else if (value == node->data) {
            return true;
        } else if (value < node->data) {
            return search(node->left, value);
        } else {
            return search(node->right, value);
        }
    }

    void inorderTraversal(BSTNode<T>* node) const {
        if (node != nullptr) {
            inorderTraversal(node->left);
            std::cout << node->data << " ";
            inorderTraversal(node->right);
        }
    }

    void deleteTree(BSTNode<T>* node) {
        if (node != nullptr) {
            deleteTree(node->left);
            deleteTree(node->right);
            delete node;
        }
    }

public:
    BST() : root(nullptr) {}

    ~BST() {
        deleteTree(root);
    }

    void insert(T value) {
        insert(root, value);
    }

    bool search(T value) const {
        return search(root, value);
    }

    void inorderTraversal() const {
        inorderTraversal(root);
        std::cout << std::endl;
    }
};

// Implementación del algoritmo de búsqueda A*
template <typename T>
class Graph {
private:
    struct Node {
        T value;
        Node* parent;
        int g;  // Costo desde el nodo inicial
        int h;  // Heurística (costo estimado hasta el objetivo)
        int f;  // Costo total (g + h)

        Node(T val, Node* par = nullptr, int gCost = 0, int hCost = 0)
            : value(val), parent(par), g(gCost), h(hCost), f(gCost + hCost) {}
    };

    struct Edge {
        Node* destination;
        int cost;
    };

    std::unordered_map<T, std::vector<Edge>> adjacencyList;

    struct CompareNode {
        bool operator()(const Node* lhs, const Node* rhs) const {
            return lhs->f > rhs->f;
        }
    };

public:
    void addEdge(T src, T dest, int cost) {
        adjacencyList[src].emplace_back(new Node(dest), cost);
    }

    std::vector<T> aStarSearch(T start, T goal) {
        std::vector<T> path;
        std::priority_queue<Node*, std::vector<Node*>, CompareNode> openList;
        std::unordered_map<T, Node*> allNodes;

        openList.push(new Node(start));
        allNodes[start] = openList.top();

        while (!openList.empty()) {
            Node* current = openList.top();
            openList.pop();

            if (current->value == goal) {
                while (current != nullptr) {
                    path.push_back(current->value);
                    current = current->parent;
                }
                std::reverse(path.begin(), path.end());
                return path;
            }

            for (const Edge& edge : adjacencyList[current->value]) {
                Node* neighbor = nullptr;
                if (allNodes.find(edge.destination->value) != allNodes.end()) {
                    neighbor = allNodes[edge.destination->value];
                } else {
                    neighbor = new Node(edge.destination->value, current, current->g + edge.cost);
                    allNodes[edge.destination->value] = neighbor;
                }

                int newG = current->g + edge.cost;
                if (newG < neighbor->g) {
                    neighbor->g = newG;
                    neighbor->f = newG + neighbor->h;
                    neighbor->parent = current;

                    openList.push(neighbor);
                }
            }
        }

        return path; // Return empty path if no path found
    }
};

int main() {
    // Ejemplo de uso del árbol binario de búsqueda
    BST<int> bst;
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    std::cout << "Inorder Traversal of BST: ";
    bst.inorderTraversal();

    std::cout << "Searching for 4 in BST: " << (bst.search(4) ? "Found" : "Not Found") << std::endl;

    // Ejemplo de uso del algoritmo de búsqueda A*
    Graph<std::string> graph;
    graph.addEdge("A", "B", 1);
    graph.addEdge("A", "C", 4);
    graph.addEdge("B", "C", 2);
    graph.addEdge("B", "D", 5);
    graph.addEdge("C", "D", 1);

    std::vector<std::string> path = graph.aStarSearch("A", "D");

    std::cout << "A* Path from A to D: ";
    for (const std::string& node : path) {
        std::cout << node << " ";
    }
    std::cout << std::endl;

    return 0;
}
