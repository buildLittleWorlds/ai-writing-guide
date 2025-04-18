---
title: Example Quality & Selection
description: Research on how example characteristics impact LLM stylistic performance
---

While research confirms that few-shot in-context learning (ICL) is effective for stylistic control, its performance is highly sensitive to the characteristics of the provided examples. Studies consistently highlight that the quality, specificity, relevance, quantity, and even the order of examples significantly impact the LLM's ability to adopt the target style or persona.

## Factors Influencing Example Effectiveness

### Quality and Specificity

High-quality examples that clearly and unambiguously demonstrate the target style are crucial. Vague or poorly written examples can confuse the model. The specificity of the examples in relation to the desired stylistic trait (e.g., formality, tone, sentence complexity) directly influences the model's ability to replicate it.

Studies analyzing prompt components emphasize the importance of demonstrative examples illustrating the desired reasoning or output style. Research on aligning LLMs via ICL found that the style of the demonstration examples themselves is a key factor influencing alignment capabilities, suggesting that stylistic consistency and clarity within the examples matter significantly.

### Relevance

Examples must be relevant to the task and the target style or persona. Irrelevant examples can mislead the model or dilute the intended signal. Techniques like Retrieval Augmented Generation (RAG) are employed to dynamically retrieve relevant information or examples based on the input query, providing pertinent context to the LLM. The effectiveness of retrieved examples hinges on their similarity to the input query and the task at hand.

### Diversity

While relevance is key, excessive similarity among examples can limit the information provided. Techniques like Maximum Marginal Relevance (MMR) aim to balance relevance with diversity when selecting examples, ensuring that the chosen demonstrations are not only pertinent but also cover different facets of the task or style, preventing redundancy. MMR helps retrieve examples that are similar to the query but also sufficiently distinct from each other, maximizing the informational value of the few-shot set.

### Quantity

The number of examples (shots) matters. While few-shot generally outperforms zero-shot, the optimal number can vary. Too few examples may not provide a strong enough signal, while too many can consume excessive context window space and potentially introduce noise or conflicting information.

Research exploring "many-shot" ICL (hundreds or thousands of examples) suggests performance can improve but may plateau after a certain point (e.g., 10-30 examples for alignment tasks), indicating diminishing returns. The optimal quantity is task- and model-dependent.

### Order

The sequence in which examples are presented in the prompt can influence LLM performance due to recency or majority label biases. Some studies suggest strategies for optimizing example order, viewing it as an information compression problem. Fantastically Ordered Prompts (FOPs) research highlights sensitivity to order.

## Advanced Strategies for Example Selection

Given the importance of these factors, selecting effective examples is a critical aspect of prompt engineering. Several sophisticated strategies have emerged:

### Contrastive Examples

This technique provides both positive examples (demonstrating desired characteristics) and negative examples (highlighting characteristics to avoid). This helps clarify user intent, especially for subjective qualities like style or tone, and has been shown to significantly improve performance and prompt efficiency compared to standard few-shot prompting using only positive examples.

Negative examples can be sourced from low-rated human data, LLM-generated outputs (which often lack desired human qualities), or via automated evaluators.

### Automated Selection Methods

More advanced methods train models (often dense retrievers) to specifically identify high-quality examples. This can involve using LLM feedback to train a reward model that scores candidate examples, followed by knowledge distillation to train the retriever. Greedy search strategies can also select examples that maximize expected performance.

Methods like IDEAL quantify the "influence" or coverage of potential examples within an unlabeled dataset to select a small, representative subset for annotation, aiming to maximize ICL performance while minimizing annotation cost.

## Practical Example Selection for Writers

For writers looking to apply these research insights in practical AI collaboration, consider these approaches:

1. **Curate a diverse portfolio** of examples showcasing different aspects of your target style

2. **Include contrastive examples** showing both what you want and what you don't want

3. **Start with 3-5 high-quality examples** before adding more

4. **Order examples** from most to least relevant to your current writing task

5. **Consider style-based filtering** of examples to ensure consistency

6. **Balance brevity and clarity** in examples to maximize context window usage

The evidence clearly indicates that thoughtful example selection dramatically improves stylistic control. By applying these research-backed strategies, writers can achieve more precise and consistent results when collaborating with AI writing tools.