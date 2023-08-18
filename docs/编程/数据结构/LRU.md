---
title: 数据结构 | Least Recently Used (LRU)
---
# {{ $frontmatter.title }}

::: tip
Least Recently Used, 页面置换算法，是一种缓存淘汰策略。手机内存清理界面就是LRU的一个生动例子。

用双向链表实现。
:::

``` C
#include <iostream>
#include <unordered_map>
using namespace std;


// 定义一个双向链表
struct DoublyListNode {
	int key, value;
	struct DoublyListNode* pre;
	struct DoublyListNode* next;
};


// 定义LRU
class LRUCache {
private:
	DoublyListNode* head;
	DoublyListNode* tail;
	int capacity, length;
	unordered_map<int, DoublyListNode*> um;
	
	
public:
	LRUCache(int capacity) {
		this->capacity = capacity;
		this->length = 0;
		head = new DoublyListNode;
		tail = new DoublyListNode;
		this->head->next = this->tail;
		this->tail->pre = this->head;
	}

	
	// 读取数据
	int get(int key) {
		auto it = this->um.find(key);
		if (it == this->um.end()) {
			return -1;
		}
		else {
			move_to_end(it->second);
			return it->second->value;
		}
	}
	
	
	// 存储数据
	void put(int key, int value) {
		if (this->um.find(key) != this->um.end()) {
			// If exists, change value
			auto it = this->um.find(key);
			it->second->value = value; move_to_end(it->second);
		}
		else {
			// If not exists, add node
			DoublyListNode* p = new DoublyListNode;
			p->key = key; p->value = value;
			p->pre = this->tail->pre; p->next = this->tail;
			this->tail->pre->next = p; this->tail->pre = p;
			um[key] = p; this->length++;
			
			if (this->length > this->capacity) {
				// length > capacity, delete first node
				DoublyListNode* tmp = this->head->next;
				this->head->next = this->head->next->next;
				this->head->next->pre = this->head;
				auto it = um.find(tmp->key);
				um.erase(it); this->length--;
			}
		}		
	}
	
	
	// 移动至末尾
	void move_to_end(DoublyListNode* p) {
		p->pre->next = p->next;
		p->next->pre = p->pre;
		p->pre = this->tail->pre;
		p->next = this->tail;
		this->tail->pre->next = p;
		this->tail->pre = p;
	}
	
	
	// 打印所有数据
	void print_all_ele() {
		DoublyListNode* tmp = this->head;
		for (int i=0; i<this->length; i++) {
			tmp = tmp->next;
			cout << tmp->key << " " << tmp->value << ", ";
		}
		cout << endl;
		cout << "Length is " << this->length << endl;
	}
	
};


int main() {
	LRUCache* lru = new LRUCache(4);
	
	lru->put(1, 1);
	lru->print_all_ele();
	lru->put(2, 2);
	lru->print_all_ele();
	cout << lru->get(1) << endl;
	lru->print_all_ele();
	lru->put(3, 3);
	lru->print_all_ele();
	cout << lru->get(2) << endl;
	lru->print_all_ele();
	lru->put(4, 4);
	lru->print_all_ele();
	cout << lru->get(1) << endl;
	lru->print_all_ele();
	cout << lru->get(3) << endl;
	lru->print_all_ele();
	cout << lru->get(4) << endl;
	lru->print_all_ele();
	lru->print_all_ele();
	
	return 0;
}
```
